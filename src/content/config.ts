import { MARKETS } from '@/data/markets'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			market: z.enum(MARKETS), // Ensure MARKETS is an array of strings
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
