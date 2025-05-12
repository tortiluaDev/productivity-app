import { z } from 'zod'

export const ImageSchema = z.object({
	id: z.number(),
	pageURL: z.string().url(),
	type: z.string(),
	tags: z.string(),
	previewURL: z.string().url(),
	previewWidth: z.number(),
	previewHeight: z.number(),
	webformatURL: z.string().url(),
	webformatWidth: z.number(),
	webformatHeight: z.number(),
	largeImageURL: z.string().url(),
	imageWidth: z.number(),
	imageHeight: z.number(),
	imageSize: z.number(),
	views: z.number(),
	downloads: z.number(),
	collections: z.number(),
	likes: z.number(),
	comments: z.number(),
	user_id: z.number(),
	user: z.string(),
	userImageURL: z.string(),
	noAiTraining: z.boolean()
})

export const PixabaySchema = z.object({
	total: z.number(),
	totalHits: z.number(),
	hits: z.array(ImageSchema)
})

export type TImage = z.infer<typeof ImageSchema>
export type TPixabay = z.infer<typeof PixabaySchema>
