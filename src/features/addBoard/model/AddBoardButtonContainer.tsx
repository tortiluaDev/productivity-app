import { useMyBoardsStore } from '@/entities/board'
import { AddBoardButton } from '@/features/addBoard/ui/AddBoardButton'
import { AddBoardForm } from '@/features/addBoard/ui/AddBoardForm'
import React, { useState } from 'react'

export function AddBoardButtonContainer() {
	const [isOpenCreateBoardModal, setIsOpenCreateBoardModal] = useState(false)
	const [boardName, setBoardName] = useState('')

	const addBoard = useMyBoardsStore(state => state.addBoard)

	const handleClick = () => {
		setIsOpenCreateBoardModal(true)
	}

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addBoard(boardName)
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
			/>
		)

	return <AddBoardButton handleClick={handleClick} />
}
