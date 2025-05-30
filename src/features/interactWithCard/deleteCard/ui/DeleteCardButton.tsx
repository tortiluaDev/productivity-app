import { useMyCardsStore } from '@/entities/card'
import { DeleteButton } from '@/shared/ui'
import { ReactNode } from 'react'

interface IProps {
	id: string
	children: ReactNode
}

export function DeleteCardButton({ id, children }: IProps) {
	const deleteCard = useMyCardsStore(state => state.deleteCard)

	return <DeleteButton onClick={() => deleteCard(id)}>{children}</DeleteButton>
}
