'use client'

import { IBoard, useMyBoardsStore } from '@/entities/board'
import { EditCard } from '@/features/interactWithCard/editCard'
import { TimerProvider } from '@/features/pomodoroTimer'
import { KanbanBoardContainer } from '@/widgets/board'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function BoardPage() {
	const router = useRouter()
	const { boardName } = useParams<{ boardName: string }>()
	const boards = useMyBoardsStore(state => state.boards)
	const board = boards.find(board => board.slug === boardName)

	useEffect(() => {
		if (boards.length > 0 && !board) router.replace('/')
	}, [board, boards])

	if (boards.length === 0) return <p>Loading...</p>

	return (
		<EditCard>
			<TimerProvider>
				<KanbanBoardContainer board={board as IBoard} />
			</TimerProvider>
		</EditCard>
	)
}

export default BoardPage
