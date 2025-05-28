import styles from '../Card.module.scss'
import { ICard } from '@/entities/card'
import { DeleteCardButton } from '@/features/interactWithCard/deleteCard'
import { EditCardButton } from '@/features/interactWithCard/editCard'
import { Checkbox } from '@/features/interactWithCard/setCompleteCard/ui'

interface IProps {
	handleMouseLeave: () => void
	card: ICard
}

export function HoverCard({ handleMouseLeave, card }: IProps) {
	// УБРАТЬ ДВЕ КНОПКИ ОТСЮДА (ФИЧИ) И ПОМЕСТИТЬ ИХ СЮДА НА ПАРУ УРОВНЕЙ ВЫШЕ ЧЕРЕЗ СЛОТЫ
	return (
		<div
			className={styles.card}
			onMouseLeave={handleMouseLeave}
		>
			<Checkbox card={card} />
			<span>{card.text}</span>
			<div className={styles.iconsWrapper}>
				{card.isComplete && <DeleteCardButton id={card.id} />}
				<EditCardButton />
			</div>
		</div>
	)
}
