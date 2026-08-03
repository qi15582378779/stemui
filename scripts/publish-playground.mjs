import { mkdir, readFile, readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectDir = path.join(repoRoot, "apps", "animated-tabs-playground");
const archivePath = path.join(repoRoot, ".sites", "animated-tabs-playground.tar.gz");
const findPackagingScript = async () => {
    const sitesRoot = path.join(os.homedir(), ".codex", "plugins", "cache", "openai-bundled", "sites");
    const versions = await readdir(sitesRoot, { withFileTypes: true });
    const candidates = versions
        .filter((entry) => entry.isDirectory())
        .map((entry) => path.join(sitesRoot, entry.name, "scripts", "package-site.sh"))
        .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

    for (const candidate of candidates) {
        try {
            await readFile(candidate);
            return candidate;
        } catch {
            // Try the next installed Sites version.
        }
    }

    throw new Error(`Could not find Sites packaging script under ${sitesRoot}`);
};

const packagingScript = process.env.SITES_PACKAGE_SCRIPT ?? await findPackagingScript();

const run = (command, args, options = {}) => new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: repoRoot, stdio: "inherit", ...options });
    child.once("error", reject);
    child.once("exit", (code) => {
        if (code === 0) {
            resolve();
            return;
        }

        reject(new Error(`${command} exited with code ${code ?? "unknown"}`));
    });
});

const hosting = JSON.parse(await readFile(path.join(projectDir, ".openai", "hosting.json"), "utf8"));
if (!hosting.project_id) {
    throw new Error("apps/animated-tabs-playground/.openai/hosting.json is missing project_id");
}

await mkdir(path.dirname(archivePath), { recursive: true });
console.log("Building animated-tabs-playground...");
await run("npm", ["run", "build:playground"]);

console.log("Packaging Sites deployment archive...");
await run("bash", [packagingScript, projectDir, archivePath]);
console.log(`Ready to publish: ${archivePath}`);
