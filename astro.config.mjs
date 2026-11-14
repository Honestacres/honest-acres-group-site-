// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.new/config
export default defineConfig({
  // Canonical production URL — used for SEO meta tags and the sitemap.
  // Keep in sync with `url` in src/config/site.ts.
  site: 'https://honestacresgroup.com',
  integrations: [sitemap()],
});
