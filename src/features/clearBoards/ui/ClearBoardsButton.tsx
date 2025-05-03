import { useMyBoardsStore } from '@/entities/board'

export function ClearBoardsButton() {
	const clearBoards = useMyBoardsStore(state => state.clearBoards)

	return (
		<button
			onClick={clearBoards}
			className='border border-1 border-white rounded-md py-1 px-2 hover:text-red-400 hover:border-red-400 transition duration-75'
		>
			Remove all boards
		</button>
	)
}
