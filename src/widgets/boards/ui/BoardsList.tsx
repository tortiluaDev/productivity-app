'use client'

import { Board, useMyBoardsStore } from '@/entities/board'
import { AddBoardButtonContainer } from '@/features/addBoard'
import { ClearBoardsButton } from '@/features/clearBoards'

export function BoardsList() {
	const boards = useMyBoardsStore(state => state.boards)

	return (
		<div className='p-12'>
			<div className='flex items-centr justify-between mb-4 text-white'>
				<h1 className='text-4xl'>My boards</h1>
				<ClearBoardsButton />
			</div>
			<div className='grid grid-cols-4 gap-3'>
				{boards.map(board => (
					<Board
						key={board.id}
						title={board.name}
						slug={board.slug}
						img={board.img}
						blurImg={board.blurImg}
					/>
				))}
				<AddBoardButtonContainer />
			</div>
		</div>
	)
}
