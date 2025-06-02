import { useMyCardsStore } from '@/entities/card'
import { useMyTimersStore } from '@/features/pomodoroTimer'
import { DeleteButton } from '@/shared/ui'
import { ReactNode } from 'react'

interface IProps {
	id: string
	children: ReactNode
}

export function DeleteCardButton({ id, children }: IProps) {
	const deleteCard = useMyCardsStore(state => state.deleteCard)
	const deleteTimer = useMyTimersStore(state => state.removeTimer)

	return (
		<DeleteButton
			onClick={() => {
				deleteCard(id)
				deleteTimer(id)
			}}
		>
			{children}
		</DeleteButton>
	)
}
