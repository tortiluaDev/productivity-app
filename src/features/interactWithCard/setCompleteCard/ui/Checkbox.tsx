import { ICard, useMyCardsStore } from '@/entities/card'
import styles from '@/entities/card/ui/Card.module.scss'
import clsx from 'clsx'
import { Check } from 'lucide-react'

interface IProps {
	card: ICard
}

export function Checkbox({ card }: IProps) {
	const togglePicked = useMyCardsStore(state => state.toggleCheckbox)

	return (
		<label>
			<input
				type='checkbox'
				className={clsx('peer', styles.checkbox)}
				onChange={() => togglePicked(card.id)}
				checked={card.isComplete}
			/>
			<Check className={clsx('peer-checked:opacity-100', styles.check)} />
		</label>
	)
}
