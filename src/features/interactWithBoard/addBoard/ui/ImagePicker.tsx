import styles from './createBoardForm.module.scss'
import { TImage } from '@/shared/api'
import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'

interface IProps {
	data: TImage[]
	setSelectedImg: (img: TImage) => void
	imagesCount: number
}

export function ImagePicker({ data, setSelectedImg, imagesCount }: IProps) {
	return (
		<div className={styles.images}>
			{data.slice(0, imagesCount).map(img => (
				<ImageWithSkeleton
					src={img.webformatURL}
					alt={img.tags.split(', ')[0]}
					key={img.id}
					onClick={() => setSelectedImg(img)}
					className='w-full h-full object-cover rounded-sm'
				/>
			))}
		</div>
	)
}
