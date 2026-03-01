import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        language: z.enum(['es', 'en']),
        category: z.enum(['cpq', 'billing', 'general']),
    }),
});

export const collections = { posts };