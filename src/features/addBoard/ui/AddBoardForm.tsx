import styles from './createBoardForm.module.scss'
import { IProps } from '@/features/addBoard/model/AddBoardForm.types'
import { ImagePicker } from '@/features/addBoard/ui/ImagePicker'
import type { TImage } from '@/shared/api'
import { ShowMoreAndHideButton } from '@/shared/ui'
import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'
import { CircleX } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export function AddBoardForm(props: IProps) {
	const {
		handleSubmitForm,
		setBoardName,
		boardName,
		setIsOpenCreateBoardModal,
		data,
		isError,
		selectedImg,
		setSelectedImg
	} = props

	const [selectedBg, setSelectedBg] = useState<TImage | null>(null)
	const [isShowMore, setIsShowMore] = useState(false)

	useEffect(() => {
		if (data && selectedImg.id > -1) {
			const image = data.find(img => img.id === selectedImg.id)
			if (image) setSelectedBg(image)
		}
	}, [data, selectedImg])

	return (
		<form
			action=''
			onSubmit={handleSubmitForm}
			className={styles.form}
		>
			<div className={styles.topForm}>
				<p>Create board</p>
				<button
					type='button'
					onClick={() => setIsOpenCreateBoardModal(false)}
				>
					<CircleX aria-label={'close board redactor form'} />
				</button>
			</div>
			{!isError && (
				<>
					<ImageWithSkeleton
						className={styles.pickedImg}
						src={selectedBg?.webformatURL || ''}
						alt={data[0].tags.split(', ')[0]}
						blurSrc={selectedBg?.previewURL || ''}
					/>
					<ImagePicker
						data={data}
						setSelectedImg={setSelectedImg}
						imagesCount={isShowMore ? 20 : 4}
					/>
					<ShowMoreAndHideButton
						onToggle={() => setIsShowMore(prev => !prev)}
						isShowMore={isShowMore}
						className={styles.btn}
						hiddenCount={data.length - data.slice(0, 4).length}
					/>
				</>
			)}
			<input
				type='text'
				placeholder='Enter board name'
				onChange={e => setBoardName(e.target.value)}
				value={boardName}
			/>
			<button
				type='submit'
				disabled={!boardName.trim()}
			>
				Create
			</button>
		</form>
	)
}
