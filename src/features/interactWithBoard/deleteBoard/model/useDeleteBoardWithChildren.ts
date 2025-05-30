import { useMyBoardsStore } from '@/entities/board'
import { useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'

export function useDeleteBoardWithChildren() {
	const deleteBoard = useMyBoardsStore(state => state.removeBoard)
	const deleteColumn = useMyColumnsStore(state => state.deleteColumn)
	const columns = useMyColumnsStore(state => state.columns)
	const cards = useMyCardsStore(state => state.cards)
	const deleteCard = useMyCardsStore(state => state.deleteCard)

	return (boardId: string) => {
		deleteBoard(boardId)
		columns
			.filter(col => col.boardId === boardId)
			.forEach(col => {
				cards.filter(card => card.columnId === col.id).forEach(card => deleteCard(card.id))
				deleteColumn(col.id)
			})
	}
}
