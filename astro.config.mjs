// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.natansantolo.com',
  // Match Hugo's trailing-slash directory URLs (e.g. /post/2025/slug/)
  build: { format: 'directory' },
  trailingSlash: 'always',
  // Reuse the existing Hugo static/ folder as Astro's public dir so assets,
  // CNAME, robots.txt, favicons and .well-known are served unchanged.
  publicDir: './static',
  outDir: './dist',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false, // en at /, es at /es/
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
    }),
  ],
});
