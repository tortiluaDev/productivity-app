import { IBoard } from '@/entities/board'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { KanbanBoard } from '@/widgets/board'
import { useEffect, useRef, useState } from 'react'

interface IProps {
	board: IBoard
}

export function KanbanBoardContainer({ board }: IProps) {
	const columns = useMyColumnsStore(state => state.columns)

	const scrollRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	useEffect(() => {
		const slider = scrollRef.current
		if (!slider) return

		const handleMouseDown = (e: MouseEvent) => {
			setIsDragging(true)
			setStartX(e.pageX - slider.offsetLeft)
			setScrollLeft(slider.scrollLeft)
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging) return
			e.preventDefault()
			const x = e.pageX - slider.offsetLeft
			const walk = (x - startX) * 1.2
			slider.scrollLeft = scrollLeft - walk
		}

		const stopDragging = () => setIsDragging(false)

		slider.addEventListener('mousedown', handleMouseDown)
		slider.addEventListener('mousemove', handleMouseMove)
		slider.addEventListener('mouseup', stopDragging)
		slider.addEventListener('mouseleave', stopDragging)

		return () => {
			slider.removeEventListener('mousedown', handleMouseDown)
			slider.removeEventListener('mousemove', handleMouseMove)
			slider.removeEventListener('mouseup', stopDragging)
			slider.removeEventListener('mouseleave', stopDragging)
		}
	}, [isDragging, startX, scrollLeft])

	return (
		<KanbanBoard
			board={board}
			columns={columns}
			scrollRef={scrollRef}
		/>
	)
}
