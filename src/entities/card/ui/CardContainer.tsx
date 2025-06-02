import { ICard } from '@/entities/card'
import { CardDeleteSlotProvider } from '@/entities/card/model/context/CardDeleteSlotContext'
import { CardEditSlotProvider } from '@/entities/card/model/context/CardEditSlotContext'
import { DefaultCard } from '@/entities/card/ui/variables/DefaultCard'
import { HoverCard } from '@/entities/card/ui/variables/HoverCard'
import { DeleteCardButton } from '@/features/interactWithCard/deleteCard'
import { EditCardButton } from '@/features/interactWithCard/editCard'
import { Checkbox } from '@/features/interactWithCard/setCompleteCard/ui/Checkbox'
import { ArchiveX } from 'lucide-react'
import { useRef, useState } from 'react'

export function Card({ card, className }: { card: ICard; className: string }) {
	const [hovered, setHovered] = useState(false)
	const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

	const handleMouseEnter = () => {
		hoverTimeout.current = setTimeout(() => {
			setHovered(true)
		}, 100)
	}

	const handleMouseLeave = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current)
			hoverTimeout.current = null
		}
		setHovered(false)
	}

	return (
		<CardDeleteSlotProvider
			value={{
				deleteSlot: (
					<DeleteCardButton id={card.id}>
						<ArchiveX size={16} />
					</DeleteCardButton>
				)
			}}
		>
			<CardEditSlotProvider value={{ editSlot: <EditCardButton id={card.id} /> }}>
				{hovered ? (
					<HoverCard
						handleMouseLeave={handleMouseLeave}
						card={card}
						className={className}
					/>
				) : (
					<DefaultCard
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						text={card.text}
						isComplete={card.isComplete}
						className={className}
					>
						<Checkbox card={card} />
					</DefaultCard>
				)}
			</CardEditSlotProvider>
		</CardDeleteSlotProvider>
	)
}
