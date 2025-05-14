import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'

interface IProps {
	title: string
	slug: string
	img: string
	blurImg?: string
}

export function Board({ title, slug, img, blurImg }: IProps) {
	return (
		<button className='opacity-85 text-left rounded-xl relative h-40'>
			<ImageWithSkeleton
				className='rounded-xl h-40'
				src={img}
				blurSrc={blurImg}
				alt={slug}
			/>
			<p className='text-white font-bold break-words text-2xl absolute top-2 left-1.5'>{title}</p>
		</button>
	)
}
