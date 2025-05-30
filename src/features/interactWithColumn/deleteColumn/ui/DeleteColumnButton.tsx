import { useDeleteColumnWithChildren } from '@/features/interactWithColumn/deleteColumn/model/useDeleteColumnWithChildren'
import { DeleteButton } from '@/shared/ui'
import { ReactNode } from 'react'

interface IProps {
	id: string
	children: ReactNode
}

export function DeleteColumnButton({ id, children }: IProps) {
	const deleteColumnWithChildren = useDeleteColumnWithChildren()

	function onDeleteHandler(columnId: string) {
		deleteColumnWithChildren(columnId)
	}

	return <DeleteButton onClick={() => onDeleteHandler(id)}>{children}</DeleteButton>
}
