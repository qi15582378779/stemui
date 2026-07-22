import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const serverDir = path.join(distRoot, "server");
const hostingSource = path.join(projectRoot, ".openai", "hosting.json");
const hostingTargetDir = path.join(distRoot, ".openai");
const workerSource = path.join(projectRoot, "worker", "static-site-worker.js");
const workerTarget = path.join(serverDir, "index.js");

await mkdir(serverDir, { recursive: true });
await mkdir(hostingTargetDir, { recursive: true });

await cp(hostingSource, path.join(hostingTargetDir, "hosting.json"));
await writeFile(workerTarget, await readFile(workerSource, "utf8"));
