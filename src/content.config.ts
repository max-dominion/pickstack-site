import { defineCollection, z } from 'astro:content';

// Review schema - individual product reviews
const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    product: z.string(),
    category: z.string(),
    rating: z.number().min(1).max(5),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    pricing: z.string(),
    affiliateUrl: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    author: z.string().default('PickStack Team'),
  }),
});

// Roundup schema - "Best X for Y" articles
const roundups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    vertical: z.string(), // e.g., "property-management"
    products: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      bestFor: z.string(),
      rating: z.number().min(1).max(5),
      affiliateUrl: z.string().optional(),
    })),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    author: z.string().default('PickStack Team'),
  }),
});

// Comparison schema - head-to-head comparisons
const comparisons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    vertical: z.string(),
    products: z.tuple([
      z.object({
        name: z.string(),
        slug: z.string(),
        rating: z.number().min(1).max(5),
        affiliateUrl: z.string().optional(),
      }),
      z.object({
        name: z.string(),
        slug: z.string(),
        rating: z.number().min(1).max(5),
        affiliateUrl: z.string().optional(),
      }),
    ]),
    winner: z.string().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('PickStack Team'),
  }),
});

// Static pages
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  reviews,
  roundups,
  comparisons,
  pages,
};
