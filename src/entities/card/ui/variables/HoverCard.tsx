import styles from '../Card.module.scss'
import { ICard } from '@/entities/card'
import { useCardDeleteSlot } from '@/entities/card/model/context/CardDeleteSlotContext'
import { useCardEditSlot } from '@/entities/card/model/context/CardEditSlotContext'
import { Checkbox } from '@/features/interactWithCard/setCompleteCard/ui'

interface IProps {
	handleMouseLeave: () => void
	card: ICard
}

export function HoverCard({ handleMouseLeave, card }: IProps) {
	const { deleteSlot } = useCardDeleteSlot()
	const { editSlot } = useCardEditSlot()

	return (
		<div
			className={styles.card}
			onMouseLeave={handleMouseLeave}
		>
			<Checkbox card={card} />
			<span>{card.text}</span>
			<div className={styles.iconsWrapper}>
				{card.isComplete && deleteSlot}
				{editSlot}
			</div>
		</div>
	)
}
