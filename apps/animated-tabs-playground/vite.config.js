import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsRoot = path.resolve(__dirname, "../../packages/icons");

const reloadOnIconLibraryChange = () => ({
    name: "reload-on-icon-library-change",
    handleHotUpdate({ file, server }) {
        if (!file.startsWith(iconsRoot)) {
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
            "@stemui/icons": path.resolve(__dirname, "../../packages/icons/src")
        }
    },
    server: {
        fs: {
            allow: [path.resolve(__dirname, "../..")]
        }
    }
});
