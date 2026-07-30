import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsRoot = path.resolve(__dirname, "../../packages/icons");
const animatedIconsRoot = path.resolve(__dirname, "../../packages/animated-icons");
const watchedPackageRoots = [iconsRoot, animatedIconsRoot];

const reloadOnIconLibraryChange = () => ({
    name: "reload-on-icon-library-change",
    handleHotUpdate({ file, server }) {
        if (!watchedPackageRoots.some((root) => file.startsWith(root))) {
            return;
        }

        server.ws.send({ type: "full-reload" });
        return [];
    }
});

export default defineConfig({
    plugins: [react(), reloadOnIconLibraryChange()],
    resolve: {
        alias: {
            "@stemui/animated-icons": path.resolve(
                __dirname,
                "../../packages/animated-icons/src"
            ),
            "@stemui/icons": path.resolve(__dirname, "../../packages/icons/src")
        }
    },
    server: {
        fs: {
            allow: [path.resolve(__dirname, "../..")]
        }
    }
});
