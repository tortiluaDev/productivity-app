import { useMyBoardsStore } from '@/entities/board'
import { useDeleteBoardsWithChildren } from '@/features/interactWithBoard/clearBoards/model/useDeleteBoardsWithChildren'

export function ClearBoardsButton() {
	const deleteBoardsWithChildren = useDeleteBoardsWithChildren()
	const boards = useMyBoardsStore(state => state.boards)

	const handleDeleteAll = () => {
		deleteBoardsWithChildren()
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
