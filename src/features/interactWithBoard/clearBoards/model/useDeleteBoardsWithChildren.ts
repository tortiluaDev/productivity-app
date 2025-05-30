import { useMyBoardsStore } from '@/entities/board'
import { useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'

export function useDeleteBoardsWithChildren() {
	const clearBoards = useMyBoardsStore(state => state.clearBoards)
	const clearColumns = useMyColumnsStore(state => state.removeColumns)
	const clearCards = useMyCardsStore(state => state.removeCards)

	return () => {
		clearBoards()
		clearColumns()
		clearCards()
	}
}
