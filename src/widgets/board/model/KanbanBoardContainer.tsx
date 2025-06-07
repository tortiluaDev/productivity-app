import { IBoard } from '@/entities/board'
import { useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { KanbanBoard } from '@/widgets/board'
import { useBoardDnD } from '@/widgets/board/model/hooks/useBoardDnD'
import { useHorizontalScroll } from '@/widgets/board/model/hooks/useHorizontalScroll'
import { BoardDragOverlay } from '@/widgets/board/ui/BoardDragOverlay'
import { DndContext, rectIntersection } from '@dnd-kit/core'

interface IProps {
	board: IBoard
}

export function KanbanBoardContainer({ board }: IProps) {
	const allColumns = useMyColumnsStore(state => state.columns)
	const allCards = useMyCardsStore(state => state.cards)
	const columns = allColumns.filter(col => col.boardId === board.id)
	const cards = allCards.filter(card => columns.some(col => col.id === card.columnId))

	const { handleDragStart, handleDragEnd, sensors, activeCard, activeColumn } = useBoardDnD({
		columns,
		cards,
		boardId: board.id
	})

	const { scrollRef } = useHorizontalScroll<HTMLDivElement>()

	return (
		<DndContext
			collisionDetection={rectIntersection}
			sensors={sensors}
			onDragEnd={e => handleDragEnd(e)}
			onDragStart={e => handleDragStart(e)}
		>
			<KanbanBoard
				board={board}
				columns={columns}
				scrollRef={scrollRef}
			/>
			<BoardDragOverlay
				activeCard={activeCard}
				activeColumn={activeColumn}
			/>
		</DndContext>
	)
}
