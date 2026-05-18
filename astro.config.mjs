import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://enixstudio.cl",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
    }),
  ],
  output: "server",
  adapter: vercel(),
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
