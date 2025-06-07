import { useEffect, useRef, useState } from 'react'

export const useHorizontalScroll = <T extends HTMLDivElement>() => {
	const scrollRef = useRef<T>(null)
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

	return { scrollRef }
}
