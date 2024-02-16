import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img1: z.string(),
			img1_alt: z.string().optional(),
      img2: z.string(),
      img2_alt: z.string().optional(),
		}),
	}),
};
