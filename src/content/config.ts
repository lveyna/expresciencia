import { defineCollection, z } from 'astro:content';

export const collections = {
	comite: defineCollection({
		schema: z.object({
			nombre: z.string(),
			cargo: z.string(),
		}),
	}),
};
