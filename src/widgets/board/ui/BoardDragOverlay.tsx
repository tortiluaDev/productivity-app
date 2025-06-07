import { Card, ICard } from '@/entities/card'
import { Column, IColumn } from '@/entities/column'
import { DragOverlay } from '@dnd-kit/core'

interface IProps {
	activeCard: ICard | null
	activeColumn: IColumn | null
}

export function BoardDragOverlay({ activeCard, activeColumn }: IProps) {
	return (
		<DragOverlay>
			{activeCard && (
				<Card
					card={activeCard}
					className=''
				/>
			)}
			{activeColumn && (
				<Column
					id={activeColumn.id}
					nameForDnD={activeColumn.name}
				/>
			)}
		</DragOverlay>
	)
}
