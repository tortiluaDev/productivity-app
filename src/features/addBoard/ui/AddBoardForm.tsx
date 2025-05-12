import styles from './createBoardForm.module.scss'
import type { TImage } from '@/shared/api'
import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'
import { CircleX } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface IProps {
	handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void
	setBoardName: (text: string) => void
	boardName: string
	setIsOpenCreateBoardModal: (isOpen: boolean) => void
	data: TImage[] | []
	isPending: boolean
	isError: boolean
	selectedImg: TImage
	setSelectedImg: (newImg: TImage) => void
}

export function AddBoardForm({
	handleSubmitForm,
	setBoardName,
	boardName,
	setIsOpenCreateBoardModal,
	data,
	isPending,
	isError,
	selectedImg,
	setSelectedImg
}: IProps) {
	// ДОДЕЛАТЬ
	// + ОБЩИЙ РЕФАКТОРИНГ!
	const [selectedBg, setSelectedBg] = useState<TImage | null>(null)

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
					<CircleX />
				</button>
			</div>
			{!isError && (
				<>
					<ImageWithSkeleton
						className={styles.pickedImg}
						src={selectedBg?.webformatURL || ''}
						alt={data[0].tags.split(', ')[0]}
						width={'100%'}
						height={'30%'}
						blurSrc={selectedBg?.previewURL || ''}
					/>
					<div className={styles.images}>
						{isPending ? (
							<div>Pending...</div>
						) : (
							data.map(img => (
								<ImageWithSkeleton
									src={img.webformatURL}
									alt={img.tags.split(', ')[0]}
									key={img.id}
									width={'100%'}
									height={'100%'}
									onClick={() => setSelectedImg(img)}
									className='w-full h-full object-cover rounded-sm'
								/>
							))
						)}
					</div>
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
				disabled={boardName.length < 1}
			>
				Create
			</button>
		</form>
	)
}
