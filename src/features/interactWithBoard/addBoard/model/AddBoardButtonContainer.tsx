import { useMyBoardsStore } from '@/entities/board'
import { AddBoardButton } from '@/features/interactWithBoard/addBoard/ui/AddBoardButton'
import { AddBoardForm } from '@/features/interactWithBoard/addBoard/ui/AddBoardForm'
import type { TImage } from '@/shared/api'
import { imagesService } from '@/shared/api'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

export function AddBoardButtonContainer() {
	const { data = [], isError } = useQuery({
		queryKey: ['boardDefaultImg'],
		queryFn: () => imagesService.getBaseImages(),
		staleTime: 1000 * 60 * 10
	})
	const [selectedImg, setSelectedImg] = useState<TImage>(data[0])

	useEffect(() => {
		if (data && data.length > 0) setSelectedImg(data[0])
	}, [data])

	const [isOpenCreateBoardModal, setIsOpenCreateBoardModal] = useState(false)
	const [boardName, setBoardName] = useState('')

	const addBoard = useMyBoardsStore(state => state.addBoard)

	const handleClick = () => {
		setIsOpenCreateBoardModal(true)
	}

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const selectedBg: TImage = data.filter(img => img.id === selectedImg?.id)[0]
		addBoard(boardName, {
			img: selectedBg.webformatURL,
			blurImg: selectedBg.previewURL,
			enhancedImg: selectedBg.largeImageURL
		})
		setBoardName('')
		setIsOpenCreateBoardModal(false)
	}

	if (isOpenCreateBoardModal)
		return (
			<AddBoardForm
				handleSubmitForm={handleSubmitForm}
				setIsOpenCreateBoardModal={setIsOpenCreateBoardModal}
				boardName={boardName}
				setBoardName={setBoardName}
				data={data}
				isError={isError}
				selectedImg={selectedImg}
				setSelectedImg={setSelectedImg}
			/>
		)

	return <AddBoardButton handleClick={handleClick} />
}
