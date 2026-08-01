import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locales = ['en', 'es'] as const;

// Blog posts. Files live under src/content/post/<lang>/... and the published
// URL preserves the Hugo pattern /post/<year>/<slug>/ (es prefixed with /es/).
const post = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    slug: z.string(),
    draft: z.boolean().default(false),
    lang: z.enum(locales).default('en'),
    // Links this post to its translation(s). Use the English slug as the key.
    translationKey: z.string(),
    // Optional "link post" fields (external article showcase).
    href: z.string().url().optional(),
    image: z.string().optional(),
    caption: z.string().optional(),
  }),
});

// "The Augmented Designer" book chapters.
const bookSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  slug: z.string(),
  weight: z.number().default(0),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  draft: z.boolean().default(false),
  lang: z.enum(locales).default('en'),
  // Logical book key, e.g. the-augmented-designer, the-augmented-team.
  book: z.string(),
  // Marks the book landing page (_index) vs a chapter.
  isIndex: z.boolean().default(false),
  // Links a chapter to its translation. Use the English slug as the key.
  translationKey: z.string(),
});

const bookDesigner = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books/the-augmented-designer' }),
  schema: bookSchema,
});

const bookTeam = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books/the-augmented-team' }),
  schema: bookSchema,
});

export const collections = { post, bookDesigner, bookTeam };
