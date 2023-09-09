import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mandrasch.github.io/",
  // for gh pages build:
  // TODO: set it via .env dynamically?
  base: '/astro-landing-page-spline-viewer-demo',
  integrations: [
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
 
});
