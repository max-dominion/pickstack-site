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

// Pricing schema - "[Tool] Pricing 2026" pages (high commercial intent)
const pricing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tool: z.string(),                     // e.g. "TurboTenant"
    toolSlug: z.string(),                 // e.g. "turbotenant"
    niche: z.string(),                    // e.g. "property-management"
    excerpt: z.string(),
    affiliateUrl: z.string().optional(),
    publishDate: z.coerce.date(),
    lastUpdated: z.coerce.date().optional(),
    author: z.string().default('PickStack Team'),
    featured: z.boolean().default(false),
  }),
});

// Alternatives schema - "Best [Tool] Alternatives 2026" pages (captures switching intent)
const alternatives = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tool: z.string(),                     // The tool being replaced, e.g. "Buildium"
    toolSlug: z.string(),                 // e.g. "buildium"
    niche: z.string(),                    // e.g. "property-management"
    excerpt: z.string(),
    alternatives: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      bestFor: z.string(),
      rating: z.number().min(1).max(5),
      affiliateUrl: z.string().optional(),
    })),
    publishDate: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('PickStack Team'),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  roundups,
  comparisons,
  pricing,
  alternatives,
};
