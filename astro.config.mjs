import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const noindexPaths = [
  '/map/interactive/',
  '/map/mortar-artillery/',
  '/factions/valkyra/',
  '/factions/lonestar/',
  '/factions/manticore/',
  '/settings/',
];

export default defineConfig({
  site: process.env.SITE || 'https://wardogshq.wiki',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !noindexPaths.some((path) => page.endsWith(path)),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
