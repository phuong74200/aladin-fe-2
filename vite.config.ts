import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
            },
        }),
    ],
    resolve: {
        alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
    },
});
