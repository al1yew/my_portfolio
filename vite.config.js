import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sitemap({
            base: "https://vasifaliyev.com",
            exclude: ["*", "/404"],
        }),
    ],
    server: {
        host: "0.0.0.0",
    },
});
