import { ICard, useMyCardsStore } from '@/entities/card'
import { IColumn } from '@/entities/column'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { DragEndEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useState } from 'react'

interface IProps {
	columns: IColumn[]
	cards: ICard[]
	boardId: string
}

export const useBoardDnD = ({ columns, cards, boardId }: IProps) => {
	const reorderColumns = useMyColumnsStore(state => state.reorderColumns)
	const reorderCardsInColumn = useMyCardsStore(state => state.reorderCardsInColumn)
	const reorderCardsInBoard = useMyCardsStore(state => state.reorderCardsInBoard)
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 2 } }))
	const [activeCard, setActiveCard] = useState<ICard | null>(null)
	const [activeColumn, setActiveColumn] = useState<IColumn | null>(null)

	const handleDragStart = ({ active }: DragStartEvent) => {
		const activeId = String(active.id)

		const column = columns.find(col => col.id === activeId)
		const card = cards.find(card => card.id === activeId)
		if (column) {
			setActiveColumn(column)
			setActiveCard(null)
		}

		if (card) {
			setActiveCard(card)
			setActiveColumn(null)
		}
	}

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if (!over) {
			setActiveCard(null)
			setActiveColumn(null)
			return
		}

		const activeId = String(active.id)
		const overId = String(over.id)

		const activeCardMatch = cards.find(card => card.id === activeId)

		if (columns.find(col => col.id === activeId)) {
			const oldIndex = columns.findIndex(col => col.id === activeId)
			const newIndex = columns.findIndex(col => col.id === overId)

			if (oldIndex === -1 || newIndex === -1) {
				setActiveCard(null)
				setActiveColumn(null)
				return
			}

			reorderColumns(boardId, oldIndex, newIndex)
			setActiveCard(null)
			setActiveColumn(null)
			return
		}

		if (activeCardMatch) {
			const fromColumnId = activeCardMatch.columnId
			const overCard = cards.find(card => card.id === overId)
			const overColumn = columns.find(col => col.id === overId)

			if (overCard) {
				const toColumnId = overCard.columnId

				if (fromColumnId === toColumnId) {
					if (activeId !== overId) {
						reorderCardsInColumn(activeId, overId)
					}
				} else {
					reorderCardsInBoard(activeId, overId, toColumnId)
				}

				setActiveCard(null)
				setActiveColumn(null)
				return
			}

			if (overColumn && overColumn.id !== fromColumnId) {
				reorderCardsInBoard(activeId, null, overColumn.id)
			}
		}
		setActiveCard(null)
		setActiveColumn(null)
	}

	return {
		handleDragStart,
		handleDragEnd,
		sensors,
		activeCard,
		activeColumn
	}
}
