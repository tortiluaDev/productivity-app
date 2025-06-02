import styles from '../Card.module.scss'
import { ICard } from '@/entities/card'
import { useCardDeleteSlot } from '@/entities/card/model/context/CardDeleteSlotContext'
import { useCardEditSlot } from '@/entities/card/model/context/CardEditSlotContext'
import { Checkbox } from '@/features/interactWithCard/setCompleteCard/ui'
import clsx from 'clsx'

interface IProps {
	handleMouseLeave: () => void
	card: ICard
	className: string
}

export function HoverCard({ handleMouseLeave, card, className }: IProps) {
	const { deleteSlot } = useCardDeleteSlot()
	const { editSlot } = useCardEditSlot()

	return (
		<div
			className={clsx(styles.card, className)}
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
