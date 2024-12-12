import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({ input: "resources/js/app.tsx", refresh: true }),
        react(),
        sentryVitePlugin({
            org: "",
            project: "",
            authToken: process.env.SENTRY_AUTH_TOKEN,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    server: {
        https: false,
        host: true,
        port: 3009,
        hmr: { host: "localhost", protocol: "ws" },
    },
});
