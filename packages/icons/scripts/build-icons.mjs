import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const svgDir = path.join(packageRoot, "svg");
const generatedDir = path.join(packageRoot, "src", "generated");
const indexFile = path.join(packageRoot, "src", "index.ts");
const cacheDir = path.join(packageRoot, ".cache");
const manifestFile = path.join(cacheDir, "icons-manifest.json");
const scriptMode = process.argv.includes("--incremental") ? "incremental" : "full";
const watchMode = process.argv.includes("--watch");
const generatorVersion = "3";

const ATTRIBUTE_MAP = new Map([
    ["clip-rule", "clipRule"],
    ["fill-rule", "fillRule"],
    ["fill-opacity", "fillOpacity"],
    ["clip-path", "clipPath"],
    ["stroke-linecap", "strokeLinecap"],
    ["stroke-linejoin", "strokeLinejoin"],
    ["stroke-width", "strokeWidth"],
    ["stroke-miterlimit", "strokeMiterlimit"],
    ["stroke-opacity", "strokeOpacity"],
    ["class", "className"]
]);

const pascalCase = (value) =>
    value
        .replace(/\.svg$/i, "")
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");

const normalizeAttributes = (markup) =>
    markup.replace(/([:@a-zA-Z0-9-]+)=/g, (match, name) => {
        const normalized =
            ATTRIBUTE_MAP.get(name) ?? name.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        return `${normalized}=`;
    });

const normalizeInlineStyles = (markup) =>
    markup.replace(/\sstyle="([^"]*)"/g, (_, style) => {
        const declarations = style
            .split(";")
            .map((declaration) => declaration.trim())
            .filter(Boolean)
            .map((declaration) => {
                const separatorIndex = declaration.indexOf(":");
                const name = declaration.slice(0, separatorIndex).trim();
                const value = declaration.slice(separatorIndex + 1).trim();
                const normalizedName = name.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
                return `${normalizedName}: ${JSON.stringify(value)}`;
            });

        return declarations.length > 0 ? ` style={{ ${declarations.join(", ")} }}` : "";
    });

const COLOR_ATTR_PATTERN = /\s(fill|stroke)="([^"]+)"/gi;
const HEX_COLOR_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
const RGB_COLOR_PATTERN = /^rgba?\(/i;
const HSL_COLOR_PATTERN = /^hsla?\(/i;

const isLiteralPaintColor = (value) => {
    const normalized = value.trim().toLowerCase();

    if (
        normalized === "none" ||
        normalized === "currentcolor" ||
        normalized === "transparent" ||
        normalized === "white" ||
        normalized === "#fff" ||
        normalized === "#ffffff" ||
        normalized.startsWith("url(")
    ) {
        return false;
    }

    return (
        HEX_COLOR_PATTERN.test(normalized) ||
        RGB_COLOR_PATTERN.test(normalized) ||
        HSL_COLOR_PATTERN.test(normalized) ||
        normalized === "black" ||
        normalized === "#000" ||
        normalized === "#000000"
    );
};

const replaceMonochromePaintWithCurrentColor = (markup) => {
    const matches = Array.from(markup.matchAll(COLOR_ATTR_PATTERN));
    const colors = new Set(
        matches
            .map(([, , value]) => value.trim().toLowerCase())
            .filter((value) => isLiteralPaintColor(value))
    );

    if (colors.size !== 1) {
        return markup;
    }

    return markup.replace(COLOR_ATTR_PATTERN, (match, attr, value) =>
        isLiteralPaintColor(value) ? ` ${attr}="currentColor"` : match
    );
};

const shouldUseCurrentColor = (fileName) => /^(line|fill)_/i.test(fileName);

const extractSvgParts = (source, fileName) => {
    const cleanSource = source
        .replace(/<\?xml[\s\S]*?\?>/g, "")
        .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
        .trim();
    const match = cleanSource.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/i);
    if (!match) {
        throw new Error("SVG root element not found");
    }

    const attrs = match[1];
    const rawBody = match[2].trim();
    const body = shouldUseCurrentColor(fileName)
        ? replaceMonochromePaintWithCurrentColor(rawBody)
        : rawBody;
    const viewBox = attrs.match(/viewBox="([^"]+)"/i)?.[1] ?? "0 0 24 24";
    return { viewBox, body: normalizeAttributes(normalizeInlineStyles(body)) };
};

const createComponentSource = (componentName, viewBox, body) => `import type { IconProps } from "../types";

export function ${componentName}Icon({ size = 24, color = "currentColor", title, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="${viewBox}"
            fill="none"
            color={color}
            aria-hidden={title ? undefined : true}
            role={title ? "img" : "presentation"}
            focusable="false"
            {...props}
        >
            {title ? <title>{title}</title> : null}
            ${body}
        </svg>
    );
}
`;

const createHashValue = (value) => createHash("sha256").update(value).digest("hex");

const readJson = async (filePath) => {
    try {
        return JSON.parse(await readFile(filePath, "utf8"));
    } catch {
        return null;
    }
};

const writeIfChanged = async (filePath, nextContent) => {
    const currentContent = await readFile(filePath, "utf8").catch(() => null);
    if (currentContent === nextContent) {
        return false;
    }

    await writeFile(filePath, nextContent);
    return true;
};

const exists = async (filePath) => {
    try {
        await stat(filePath);
        return true;
    } catch {
        return false;
    }
};

const normalizeSvgFileName = (file) => file.replace(/\s+/g, "_");

const readNormalizedSvgFiles = async () => {
    const files = (await readdir(svgDir)).filter((file) => file.endsWith(".svg")).sort();
    const fileSet = new Set(files);
    const renameTargets = new Map();
    const duplicateFiles = new Map();

    for (const file of files) {
        const normalizedFile = normalizeSvgFileName(file);
        if (normalizedFile === file) {
            continue;
        }

        if (fileSet.has(normalizedFile)) {
            const source = await readFile(path.join(svgDir, file), "utf8");
            const target = await readFile(path.join(svgDir, normalizedFile), "utf8");
            if (source === target) {
                duplicateFiles.set(file, normalizedFile);
                continue;
            }

            throw new Error(`Cannot normalize "${file}" to "${normalizedFile}" because the target name already exists.`);
        }

        if (renameTargets.has(normalizedFile)) {
            throw new Error(`Cannot normalize "${file}" to "${normalizedFile}" because another SVG has the same target name.`);
        }

        renameTargets.set(normalizedFile, file);
    }

    for (const [file, normalizedFile] of duplicateFiles) {
        await rm(path.join(svgDir, file), { force: true });
        console.log(`[icons:normalize] removed duplicate "${file}" already covered by "${normalizedFile}"`);
    }

    for (const [normalizedFile, file] of renameTargets) {
        await rename(path.join(svgDir, file), path.join(svgDir, normalizedFile));
        console.log(`[icons:normalize] renamed "${file}" to "${normalizedFile}"`);
    }

    return (await readdir(svgDir)).filter((file) => file.endsWith(".svg")).sort();
};

const runBuild = async () => {
    await mkdir(generatedDir, { recursive: true });
    await mkdir(cacheDir, { recursive: true });

    const svgFiles = await readNormalizedSvgFiles();
    const rootExports = [];
    const generatedExports = [];
    const previousManifest = (await readJson(manifestFile)) ?? { icons: {} };
    const nextManifest = { icons: {} };
    const seenComponents = new Map();
    const changedIcons = [];
    const removedIcons = [];
    const activeComponentNames = new Set();
    let indexTouched = false;

    for (const file of svgFiles) {
        const componentName = pascalCase(file);
        if (seenComponents.has(componentName)) {
            throw new Error(
                `Duplicate icon component name "${componentName}Icon" from "${seenComponents.get(componentName)}" and "${file}".`
            );
        }
        seenComponents.set(componentName, file);

        const svgSource = await readFile(path.join(svgDir, file), "utf8");
        const { viewBox, body } = extractSvgParts(svgSource, file);
        const outputFile = path.join(generatedDir, `${componentName}Icon.tsx`);
        const sourceHash = createHashValue(`${generatorVersion}\n${svgSource}`);
        const nextComponentSource = createComponentSource(componentName, viewBox, body);
        const previousEntry = previousManifest.icons[file];
        const previousOutputFile = previousEntry
            ? path.join(generatedDir, `${previousEntry.componentName}Icon.tsx`)
            : null;
        const shouldWriteComponent =
            scriptMode === "full" ||
            !previousEntry ||
            previousEntry.componentName !== componentName ||
            previousEntry.hash !== sourceHash ||
            !(await exists(outputFile));

        if (shouldWriteComponent) {
            const written = await writeIfChanged(outputFile, nextComponentSource);
            if (written || scriptMode === "incremental") {
                changedIcons.push(file);
            }
        }

        if (previousOutputFile && previousOutputFile !== outputFile) {
            await rm(previousOutputFile, { force: true });
        }

        nextManifest.icons[file] = {
            componentName,
            hash: sourceHash
        };
        activeComponentNames.add(componentName);

        rootExports.push(`export { ${componentName}Icon } from "./generated/${componentName}Icon";`);
        generatedExports.push(`export { ${componentName}Icon } from "./${componentName}Icon";`);
    }

    for (const [file, entry] of Object.entries(previousManifest.icons)) {
        if (nextManifest.icons[file]) {
            continue;
        }

        if (activeComponentNames.has(entry.componentName)) {
            continue;
        }

        removedIcons.push(file);
        await rm(path.join(generatedDir, `${entry.componentName}Icon.tsx`), { force: true });
    }

    indexTouched =
        (await writeIfChanged(path.join(generatedDir, "index.ts"), `${generatedExports.join("\n")}\n`)) ||
        indexTouched;
    indexTouched =
        (await writeIfChanged(indexFile, `${rootExports.join("\n")}\nexport type { IconProps } from "./types";\n`)) ||
        indexTouched;

    await writeIfChanged(`${manifestFile}`, `${JSON.stringify(nextManifest, null, 2)}\n`);

    const summary =
        scriptMode === "incremental"
            ? `updated ${changedIcons.length}, removed ${removedIcons.length}, index ${indexTouched ? "updated" : "unchanged"}`
            : `generated ${svgFiles.length} icons`;

    console.log(`[icons:${scriptMode}] ${summary}`);
};

const runOnce = async () => {
    try {
        await runBuild();
    } catch (error) {
        console.error(error instanceof Error ? error.message : error);
        if (!watchMode) {
            process.exitCode = 1;
        }
    }
};

await runOnce();

if (watchMode) {
    let pending = false;
    let lastFingerprint = "";

    const createFingerprint = async () => {
        const files = (await readdir(svgDir)).filter((file) => file.endsWith(".svg")).sort();
        const stats = await Promise.all(
            files.map(async (file) => {
                const fileStat = await stat(path.join(svgDir, file));
                return `${file}:${fileStat.mtimeMs}:${fileStat.size}`;
            })
        );

        return stats.join("|");
    };

    lastFingerprint = await createFingerprint();

    setInterval(async () => {
        const nextFingerprint = await createFingerprint();
        if (nextFingerprint === lastFingerprint || pending) {
            return;
        }

        pending = true;
        lastFingerprint = nextFingerprint;
        console.log("[icons:watch] detected svg directory change");
        await runOnce();
        pending = false;
    }, 500);

    console.log(`[icons:watch] polling ${svgDir}`);
}
