import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'

interface IProps {
	title: string
	slug: string
	img: string
	blurImg?: string
}

export function Board({ title, slug, img, blurImg }: IProps) {
	return (
		<button className='opacity-85 min-h-28 max-h-32 text-left rounded-xl relative'>
			<ImageWithSkeleton
				className='w-full h-full rounded-xl'
				src={img}
				blurSrc={blurImg}
				alt={slug}
				width='100%'
				height='100%'
			/>
			<p className='text-white font-bold break-words text-2xl absolute top-2 left-1.5'>{title}</p>
		</button>
	)
}
