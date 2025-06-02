import { Card, useMyCardsStore } from '@/entities/card'
import { EditCardModal, useEditCard } from '@/features/interactWithCard/editCard'
import { useMyTimersStore } from '@/features/pomodoroTimer'

export function CardList({ columnId }: { columnId: string }) {
	const cards = useMyCardsStore(state => state.cards)
	const activeTimerCardId = useMyTimersStore(state => state.activeTimerCardId)
	const { editCardId, setEditCardId } = useEditCard()

	return (
		<>
			{cards.map(card => {
				if (card.columnId === columnId)
					return (
						<div key={card.id}>
							<Card
								card={card}
								className={activeTimerCardId === card.id ? 'animate-pulse' : ''}
							/>
							{editCardId === card.id && (
								<EditCardModal
									setIsEdit={() => setEditCardId(null)}
									text={card.text}
									id={card.id}
								/>
							)}
						</div>
					)
			})}
		</>
	)
}
