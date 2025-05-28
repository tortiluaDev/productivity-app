import { useMyBoardsStore } from '@/entities/board'
import { useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'

export function ClearBoardsButton() {
	const clearBoards = useMyBoardsStore(state => state.clearBoards)
	const clearColumns = useMyColumnsStore(state => state.removeColumns)
	const clearCards = useMyCardsStore(state => state.removeCards)
	const boards = useMyBoardsStore(state => state.boards)

	const handleDeleteAll = () => {
		clearBoards()
		clearColumns()
		clearCards()
	}

	return (
		<button
			onClick={handleDeleteAll}
			className='border border-1 border-white rounded-md py-1 px-2 hover:text-red-400 hover:border-red-400 transition duration-75'
			disabled={!boards.length}
		>
			Remove all boards
		</button>
	)
}
