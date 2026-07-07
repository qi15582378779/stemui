import { spawn } from "node:child_process";

const tasks = [
    {
        label: "icons",
        cmd: "npm",
        args: ["run", "dev:icons"]
    },
    {
        label: "playground",
        cmd: "npm",
        args: ["run", "dev:playground"]
    }
];

const children = [];
let shuttingDown = false;

const stopAll = (signal = "SIGTERM") => {
    if (shuttingDown) {
        return;
    }
    shuttingDown = true;

    for (const child of children) {
        if (!child.killed) {
            child.kill(signal);
        }
    }
};

for (const task of tasks) {
    const child = spawn(task.cmd, task.args, {
        cwd: process.cwd(),
        env: process.env,
        stdio: "inherit",
        shell: process.platform === "win32"
    });

    children.push(child);

    child.on("exit", (code) => {
        if (!shuttingDown && code && code !== 0) {
            stopAll();
            process.exitCode = code;
        }
    });
}

process.on("SIGINT", () => stopAll("SIGINT"));
process.on("SIGTERM", () => stopAll("SIGTERM"));
