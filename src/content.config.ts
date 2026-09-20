import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Norsk IPTV Redaksjon'),
    keywords: z.array(z.string()).optional(),
    readTime: z.string().optional(),
  }),
});

export const collections = { guides };
