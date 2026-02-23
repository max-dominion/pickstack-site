import { defineCollection, z } from 'astro:content';

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
    excerpt: z.string(),                  // Short summary for cards / meta description
    niche: z.string(),                    // e.g. "property-management", "hoa-management", "salon-management"
    tools: z.array(z.object({
      name: z.string(),
      slug: z.string(),                   // e.g. "stessa"
      rating: z.number().min(1).max(5),
      bestFor: z.string().optional(),     // e.g. "Investor landlords"
      affiliateUrl: z.string().optional(),
    })).min(2).max(2),
    verdict: z.string(),                  // Quick 1-sentence winner statement
    publishDate: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('PickStack Team'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  roundups,
  comparisons,
};
