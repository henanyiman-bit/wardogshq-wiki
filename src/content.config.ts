import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primaryKeyword: z.string(),
    intent: z.string(),
    pageType: z.string(),
    canonicalPath: z.string().startsWith('/'),
    indexable: z.boolean(),
    priority: z.string(),
    updated: z.coerce.date(),
    pageId: z.string(),
  }),
});

export const collections = { wiki };
