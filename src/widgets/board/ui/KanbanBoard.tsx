import { IBoard } from '@/entities/board'
import { Column, IColumn } from '@/entities/column'
import { AddColumnButton } from '@/features/addColumn'
import { TopPanel } from '@/widgets/board'
import { Ref } from 'react'

interface IProps {
	board: IBoard
	columns: IColumn[]
	scrollRef: Ref<HTMLDivElement> | null
}

export function KanbanBoard({ board, columns, scrollRef }: IProps) {
	return (
		<div
			style={{
				backgroundImage: `url(${board.images?.enhancedImg ? board.images.enhancedImg : board.images?.img})`
			}}
			className='relative min-h-screen bg-cover bg-center text-white'
		>
			<div className='absolute inset-0 bg-black/40' />
			<TopPanel boardName={board.name} />
			<div
				ref={scrollRef}
				className='relative z-10 h-screen overflow-x-auto cursor-grab active:cursor-grabbing'
			>
				<div className='p-12 flex gap-5 items-start min-w-max'>
					{columns.map(column => {
						if (column.boardId === board.id)
							return (
								<Column
									name={column.name}
									id={column.id}
									key={column.id}
								/>
							)
					})}
					<AddColumnButton boardId={board.id} />
				</div>
			</div>
		</div>
	)
}
