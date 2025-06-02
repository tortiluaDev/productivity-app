import { useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { useMyTimersStore } from '@/features/pomodoroTimer'

export function useDeleteColumnWithChildren() {
	const deleteColumn = useMyColumnsStore(state => state.deleteColumn)
	const deleteCard = useMyCardsStore(state => state.deleteCard)
	const removeTimer = useMyTimersStore(state => state.removeTimer)
	const cards = useMyCardsStore(state => state.cards)

	return (columnId: string) => {
		deleteColumn(columnId)
		cards.forEach(card => {
			if (card.columnId === columnId) {
				removeTimer(card.id)
				deleteCard(card.id)
			}
		})
	}
}
