import { PixabaySchema, TImage } from '@/shared/api/pixabay/model/image.schema'

class ImagesService {
	_API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY
	_BASE_URL = 'https://pixabay.com/api'

	async getBaseImages(): Promise<TImage[]> {
		const url = `${this._BASE_URL}/?key=${this._API_KEY}&q=landscape&image_type=photo&orientation=horizontal`

		try {
			const response = await fetch(url)

			if (!response.ok) {
				console.error(`Pixabay response status: ${response.status}`)
				return []
			}

			const json = await response.json()
			const validatedData = PixabaySchema.safeParse(json)

			if (!validatedData.success) {
				console.error(validatedData.error)
				return []
			}

			return validatedData.data.hits
		} catch (e) {
			console.error(`Pixabay fetch error: ${e}`)
			return []
		}
	}
}

export const imagesService = new ImagesService()
