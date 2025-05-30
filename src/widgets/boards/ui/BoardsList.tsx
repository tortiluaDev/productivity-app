'use client'

import styles from './BoardsList.module.scss'
import { Board, useMyBoardsStore } from '@/entities/board'
import { DeleteBoardButton } from '@/features/interactWithBoard/deleteBoard'
import { Trash2 } from 'lucide-react'
import { AddBoardButtonContainer } from 'src/features/interactWithBoard/addBoard'
import { ClearBoardsButton } from 'src/features/interactWithBoard/clearBoards'

export function BoardsList() {
	const boards = useMyBoardsStore(state => state.boards)

	return (
		<div className='p-12'>
			<div className='flex items-center justify-between mb-4 text-white'>
				<h1 className='text-4xl'>My boards</h1>
				<ClearBoardsButton />
			</div>
			<div className={styles.boardsContainer}>
				{boards.map(board => (
					<Board
						key={board.id}
						title={board.name}
						slug={board.slug}
						img={board.images.img}
						blurImg={board.images.blurImg}
						id={board.id}
						deleteSlot={
							<DeleteBoardButton boardId={board.id}>
								<Trash2 size={18} />
							</DeleteBoardButton>
						}
					/>
				))}
				<AddBoardButtonContainer />
			</div>
		</div>
	)
}
