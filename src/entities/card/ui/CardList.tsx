import { Card, useMyCardsStore } from '@/entities/card'
import { EditCardModal, useEditCard } from '@/features/interactWithCard/editCard'

export function CardList({ columnId }: { columnId: string }) {
	const cards = useMyCardsStore(state => state.cards)
	const { editCardId, setEditCardId } = useEditCard()

	return (
		<>
			{cards.map(card => {
				if (card.columnId === columnId)
					return (
						<>
							<Card
								card={card}
								key={card.id}
							/>
							{editCardId === card.id && (
								<EditCardModal
									setIsEdit={() => setEditCardId(null)}
									text={card.text}
									id={card.id}
								/>
							)}
						</>
					)
			})}
		</>
	)
}
