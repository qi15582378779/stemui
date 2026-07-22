import { cp, mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const serverDir = path.join(distRoot, "server");
const hostingSource = path.join(projectRoot, ".openai", "hosting.json");
const hostingTargetDir = path.join(distRoot, ".openai");
const workerTarget = path.join(serverDir, "index.js");

const mimeTypes = new Map([
    [".html", "text/html; charset=utf-8"],
    [".js", "text/javascript; charset=utf-8"],
    [".css", "text/css; charset=utf-8"],
    [".json", "application/json; charset=utf-8"],
    [".svg", "image/svg+xml"],
    [".png", "image/png"],
    [".jpg", "image/jpeg"],
    [".jpeg", "image/jpeg"],
    [".webp", "image/webp"],
    [".ico", "image/x-icon"]
]);

const walkFiles = async (directory) => {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(
        entries.map(async (entry) => {
            const entryPath = path.join(directory, entry.name);

            if (entry.isDirectory()) {
                return walkFiles(entryPath);
            }

            return [entryPath];
        })
    );

    return files.flat();
};

const toRoutePath = (absolutePath) => {
    const relativePath = path.relative(distRoot, absolutePath).split(path.sep).join("/");
    return `/${relativePath}`;
};

const toMimeType = (absolutePath) => mimeTypes.get(path.extname(absolutePath).toLowerCase()) ?? "application/octet-stream";

const assetFiles = (await walkFiles(distRoot)).filter((filePath) => !filePath.includes(`${path.sep}.openai${path.sep}`) && !filePath.includes(`${path.sep}server${path.sep}`));
const assetEntries = await Promise.all(
    assetFiles.map(async (filePath) => {
        const content = await readFile(filePath, "utf8");

        return {
            routePath: toRoutePath(filePath),
            mimeType: toMimeType(filePath),
            content
        };
    })
);

const workerSource = `const assets = new Map(${JSON.stringify(
    assetEntries.map((entry) => [entry.routePath, { mimeType: entry.mimeType, content: entry.content }])
)});

const notFoundStatuses = new Set([404, 405]);

function createResponse(routePath) {
    const asset = assets.get(routePath);

    if (!asset) {
        return null;
    }

    return new Response(asset.content, {
        status: 200,
        headers: {
            "content-type": asset.mimeType,
            "cache-control": routePath.startsWith("/assets/") ? "public, max-age=31536000, immutable" : "no-store"
        }
    });
}

export default {
    async fetch(request) {
        const url = new URL(request.url);
        const routePath = url.pathname === "/" ? "/index.html" : url.pathname;
        const directResponse = createResponse(routePath);

        if (directResponse) {
            return directResponse;
        }

        const acceptsHtml = request.headers.get("accept")?.includes("text/html");
        const isAssetLikePath = /\\.[a-z0-9]+$/i.test(url.pathname);

        if (!acceptsHtml || isAssetLikePath) {
            return new Response("Not Found", { status: 404 });
        }

        return createResponse("/index.html") ?? new Response("Not Found", { status: 404 });
    }
};
`;

await mkdir(serverDir, { recursive: true });
await mkdir(hostingTargetDir, { recursive: true });

await cp(hostingSource, path.join(hostingTargetDir, "hosting.json"));
await writeFile(workerTarget, workerSource);
