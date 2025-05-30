import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface IProps {
	title: string
	slug: string
	img: string
	blurImg?: string
	id: string
	deleteSlot: ReactNode
}

export function Board({ title, slug, img, blurImg, deleteSlot }: IProps) {
	const router = useRouter()

	return (
		<div
			className='opacity-85 text-left rounded-xl relative h-40 cursor-pointer'
			onClick={() => router.push(`/b/${slug}`)}
		>
			<ImageWithSkeleton
				className='rounded-xl h-40'
				src={img}
				blurSrc={blurImg}
				alt={slug}
				isLazy={false}
			/>
			<p className='text-white font-bold break-words text-2xl absolute top-2 left-1.5'>{title}</p>
			{deleteSlot}
		</div>
	)
}
