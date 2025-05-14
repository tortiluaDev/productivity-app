import { TImage } from '@/shared/api'
import React from 'react'

export interface IProps {
	handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void
	setBoardName: (text: string) => void
	boardName: string
	setIsOpenCreateBoardModal: (isOpen: boolean) => void
	data: TImage[] | []
	isPending?: boolean
	isError: boolean
	selectedImg: TImage
	setSelectedImg: (newImg: TImage) => void
}
