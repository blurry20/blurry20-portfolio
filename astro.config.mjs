import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://blurry20.vercel.app",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
    },
  },
});
