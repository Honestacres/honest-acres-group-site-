import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections — blog posts and listings are plain Markdown files.
 *
 *  - Add a blog post:  drop a new .md file in src/content/blog/
 *  - Add a listing:    drop a new .md file in src/content/listings/
 *
 * See README.md for step-by-step instructions and copy-paste templates.
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const listings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/listings' }),
  schema: z.object({
    title: z.string(),
    county: z.string(),
    price: z.number().optional(),
    acres: z.number().optional(),
    status: z.enum(['available', 'under-contract', 'sold']).default('available'),
    description: z.string(),
    /** Path under public/, e.g. '/images/listings/my-ranch.jpg' — optional for now. */
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, listings };
