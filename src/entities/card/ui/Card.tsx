import { Checkbox } from '@/entities/card/ui/Checkbox'
import { DefaultCard } from '@/entities/card/ui/DefaultCard'
import { HoverCard } from '@/entities/card/ui/HoverCard'
import { useRef, useState } from 'react'

export function Card() {
	const [hovered, setHovered] = useState(false)
	const [picked, setPicked] = useState(false)
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

	const handleMouseEnter = () => {
		hoverTimeout.current = setTimeout(() => {
			setHovered(true)
		}, 75)
	}
	const handleMouseLeave = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current)
			hoverTimeout.current = null
		}
		setHovered(false)
	}

	function checkboxClickHandler() {
		setPicked(prev => !prev)
	}

	if (!hovered && !picked)
		return (
			<DefaultCard
				handleMouseEnter={handleMouseEnter}
				handleMouseLeave={handleMouseLeave}
				text={'some text'}
			/>
		)

	if (!hovered && picked)
		return (
			<DefaultCard
				handleMouseEnter={handleMouseEnter}
				handleMouseLeave={handleMouseLeave}
				text={'some text'}
			>
				<Checkbox
					checkboxClickHandler={checkboxClickHandler}
					picked={picked}
				/>
			</DefaultCard>
		)

	if (hovered)
		return (
			<HoverCard
				handleMouseLeave={handleMouseLeave}
				text={'some text'}
				checkboxClickHandler={checkboxClickHandler}
				picked={picked}
			/>
		)
}
