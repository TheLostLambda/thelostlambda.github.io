// @ts-check
import { defineConfig } from "astro/config";

import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://thelostlambda.github.io/",
  integrations: [markdoc(), sitemap(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
