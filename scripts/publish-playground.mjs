import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectDir = path.join(repoRoot, "apps", "animated-tabs-playground");
const archivePath = path.join(repoRoot, ".sites", "animated-tabs-playground.tar.gz");
const defaultPackagingScript = "/Users/zhangyuqi/.codex/plugins/cache/openai-bundled/sites/0.1.31/scripts/package-site.sh";
const packagingScript = process.env.SITES_PACKAGE_SCRIPT ?? defaultPackagingScript;

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
