import { EditCardModal, ICard } from '@/entities/card'
import { DefaultCard } from '@/entities/card/ui/variables/DefaultCard'
import { HoverCard } from '@/entities/card/ui/variables/HoverCard'
import { useIsEditCard } from '@/features/interactWithCard/editCard'
import { Checkbox } from '@/features/interactWithCard/setCompleteCard/ui/Checkbox'
import { useRef, useState } from 'react'

export function Card({ card }: { card: ICard }) {
	const [hovered, setHovered] = useState(false)
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
	const { isEdit, toggleIsEdit } = useIsEditCard()

	const handleMouseEnter = () => {
		hoverTimeout.current = setTimeout(() => {
			setHovered(true)
		}, 50)
	}

	const handleMouseLeave = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current)
			hoverTimeout.current = null
		}
		setHovered(false)
	}

	if (isEdit) return <EditCardModal setIsEdit={toggleIsEdit} />

	return hovered ? (
		<HoverCard
			handleMouseLeave={handleMouseLeave}
			card={card}
		/>
	) : (
		<DefaultCard
			handleMouseEnter={handleMouseEnter}
			handleMouseLeave={handleMouseLeave}
			text={card.text}
			isComplete={card.isComplete}
		>
			<Checkbox card={card} />
		</DefaultCard>
	)
}
