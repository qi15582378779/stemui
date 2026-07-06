import { copyFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const packageRoot = resolve(import.meta.dirname, "..");
const sourceCssPath = resolve(packageRoot, "src/styles.css");
const distCssPath = resolve(packageRoot, "dist/styles.css");
const distIndexPath = resolve(packageRoot, "dist/index.js");
const entryContents = 'import "./styles.css";\nexport * from "./core.js";\n';

await copyFile(sourceCssPath, distCssPath);
await writeFile(distIndexPath, entryContents);
