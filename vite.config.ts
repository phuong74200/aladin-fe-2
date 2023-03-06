import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { checker } from "vite-plugin-checker";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
            },
            overlay: {
                initialIsOpen: false,
            },
        }),
    ],
    resolve: {
        alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
        host: true,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./__test__/setup.ts",
    },
});
