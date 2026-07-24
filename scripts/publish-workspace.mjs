import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const USAGE =
    "Usage: node ./scripts/publish-workspace.mjs <workspace-package-name> [--bump patch|minor|major] [--manual]";

const packageName = process.argv[2];

if (!packageName) {
    console.error(USAGE);
    process.exit(1);
}

const bumpFlagIndex = process.argv.indexOf("--bump");
const isManual = process.argv.includes("--manual");
const bumpType =
    bumpFlagIndex === -1
        ? "patch"
        : process.argv[bumpFlagIndex + 1] ?? "patch";

if (!["patch", "minor", "major"].includes(bumpType)) {
    console.error(`Invalid bump type: ${bumpType}`);
    console.error(USAGE);
    process.exit(1);
}

const workspacePackagePath = resolveWorkspacePackagePath(packageName);
const packageJsonPath = path.join(workspacePackagePath, "package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

if (packageJson.name !== packageName) {
    console.error(
        `Workspace package name mismatch: expected ${packageName}, found ${packageJson.name}`
    );
    process.exit(1);
}

const localVersion = packageJson.version;
const remoteVersion = fetchRemoteVersion(packageName);
const nextVersion = resolveNextVersion({
    localVersion,
    remoteVersion,
    bumpType,
    isManual
});

if (nextVersion !== localVersion) {
    packageJson.version = nextVersion;
    writeFileSync(
        packageJsonPath,
        `${JSON.stringify(packageJson, null, 2)}\n`,
        "utf8"
    );
    console.log(
        `[publish] ${packageName}: ${localVersion} -> ${nextVersion}` +
            (remoteVersion ? ` (npm latest: ${remoteVersion})` : "")
    );
} else {
    console.log(
        `[publish] ${packageName}: publishing ${nextVersion}` +
            (remoteVersion ? ` (npm latest: ${remoteVersion})` : "")
    );
}

const publishResult = spawnSync(
    "npm",
    ["publish", "--workspace", packageName, "--access", "public"],
    {
        cwd: process.cwd(),
        env: process.env,
        stdio: "inherit",
        shell: process.platform === "win32"
    }
);

if (publishResult.status !== 0) {
    process.exit(publishResult.status ?? 1);
}

function resolveWorkspacePackagePath(name) {
    const rootPackageJson = JSON.parse(readFileSync("package.json", "utf8"));
    const workspacePatterns = rootPackageJson.workspaces;

    if (!Array.isArray(workspacePatterns)) {
        console.error("Root package.json workspaces is missing.");
        process.exit(1);
    }

    for (const pattern of workspacePatterns) {
        if (!pattern.endsWith("/*")) {
            continue;
        }

        const workspaceRoot = pattern.slice(0, -2);
        let entries;

        try {
            entries = readdirSync(workspaceRoot, { withFileTypes: true });
        } catch {
            continue;
        }

        for (const entry of entries) {
            if (!entry.isDirectory()) {
                continue;
            }

            const candidatePackageJsonPath = path.join(
                workspaceRoot,
                entry.name,
                "package.json"
            );

            try {
                const candidatePackageJson = JSON.parse(
                    readFileSync(candidatePackageJsonPath, "utf8")
                );

                if (candidatePackageJson.name === name) {
                    return path.join(workspaceRoot, entry.name);
                }
            } catch {
                continue;
            }
        }
    }

    console.error(`Workspace package not found: ${name}`);
    process.exit(1);
}

function fetchRemoteVersion(name) {
    const result = spawnSync(
        "npm",
        ["view", name, "version", "--json"],
        {
            cwd: process.cwd(),
            env: process.env,
            encoding: "utf8",
            shell: process.platform === "win32"
        }
    );

    const stdout = (result.stdout || "").trim();
    const stderr = (result.stderr || "").trim();

    if (result.status !== 0) {
        if (
            /E404|404 Not Found|not in this registry|is not in this registry/i.test(
                `${stdout}\n${stderr}`
            )
        ) {
            return null;
        }

        console.error(stderr || stdout || `Failed to fetch npm version for ${name}`);
        process.exit(result.status ?? 1);
    }

    if (!stdout) {
        return null;
    }

    try {
        const parsed = JSON.parse(stdout);
        return typeof parsed === "string" ? parsed : String(parsed);
    } catch {
        return stdout.replace(/^"|"$/g, "");
    }
}

function resolveNextVersion({ localVersion, remoteVersion, bumpType, isManual }) {
    const baseVersion =
        remoteVersion && compareVersions(localVersion, remoteVersion) < 0
            ? remoteVersion
            : localVersion;

    if (isManual) {
        if (!remoteVersion || compareVersions(localVersion, remoteVersion) > 0) {
            return localVersion;
        }

        return bumpVersion(baseVersion, "patch");
    }

    return bumpVersion(baseVersion, bumpType);
}

function parseVersion(version) {
    const match = String(version)
        .trim()
        .match(/^(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/);

    if (!match) {
        throw new Error(`Unsupported version format: ${version}`);
    }

    return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function compareVersions(leftVersion, rightVersion) {
    const leftParts = parseVersion(leftVersion);
    const rightParts = parseVersion(rightVersion);

    for (let index = 0; index < 3; index += 1) {
        if (leftParts[index] === rightParts[index]) {
            continue;
        }

        return leftParts[index] < rightParts[index] ? -1 : 1;
    }

    return 0;
}

function bumpVersion(version, type) {
    const [major, minor, patch] = parseVersion(version);

    if (type === "major") {
        return `${major + 1}.0.0`;
    }

    if (type === "minor") {
        return `${major}.${minor + 1}.0`;
    }

    return `${major}.${minor}.${patch + 1}`;
}
