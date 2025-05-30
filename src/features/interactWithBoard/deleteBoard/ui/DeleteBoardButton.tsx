import { useDeleteBoardWithChildren } from '@/features/interactWithBoard/deleteBoard/model/useDeleteBoardWithChildren'
import { DeleteButton } from '@/shared/ui'
import { ReactNode } from 'react'

interface IProps {
	boardId: string
	children?: ReactNode
}

export function DeleteBoardButton({ boardId, children }: IProps) {
	const deleteBoardWithChildren = useDeleteBoardWithChildren()

	function onDeleteHandler(boardId: string) {
		deleteBoardWithChildren(boardId)
	}

	return (
		<DeleteButton
			className='text-xl font-bold absolute -translate-x-1/2 -translate-y-1/2 right-0.5 bottom-0'
			onClick={e => {
				e.stopPropagation()
				onDeleteHandler(boardId)
			}}
		>
			{children}
		</DeleteButton>
	)
}
