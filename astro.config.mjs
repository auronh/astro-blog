import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astrotutorial-auronh.netlify.app",
  integrations: [preact()]
});