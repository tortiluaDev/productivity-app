'use client'

import { IBoard, useMyBoardsStore } from '@/entities/board'
import { KanbanBoardContainer } from '@/widgets/board'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface IProps {
	params: {
		boardName: string
	}
}

function BoardPage({ params }: IProps) {
	const router = useRouter()
	const boards = useMyBoardsStore(state => state.boards)
	const board = boards.find(board => board.slug === params.boardName)

	useEffect(() => {
		if (boards.length > 0 && !board) router.replace('/')
	}, [board, boards])

	if (boards.length === 0) return <p>Loading...</p>

	return <KanbanBoardContainer board={board as IBoard} />
}

export default BoardPage
