import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static"

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  adapter: vercel(),
});