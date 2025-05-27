import styles from './Card.module.scss'
import clsx from 'clsx'
import { Check } from 'lucide-react'

interface IProps {
	checkboxClickHandler: () => void
	picked: boolean
}

export function Checkbox({ checkboxClickHandler, picked }: IProps) {
	return (
		<label>
			<input
				type='checkbox'
				className={clsx('peer', styles.checkbox)}
				onChange={() => checkboxClickHandler()}
				checked={picked}
			/>
			<Check className={clsx('peer-checked:opacity-100', styles.check)} />
		</label>
	)
}
