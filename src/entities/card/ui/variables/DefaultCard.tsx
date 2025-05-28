import styles from '../Card.module.scss'
import { ReactNode } from 'react'

interface IProps {
	handleMouseEnter: () => void
	handleMouseLeave: () => void
	text: string
	isComplete: boolean
	children: ReactNode
}

export function DefaultCard({
	handleMouseEnter,
	handleMouseLeave,
	text,
	isComplete,
	children
}: IProps) {
	return (
		<div
			className={styles.cardDefault}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{isComplete && children}
			<span>{text}</span>
		</div>
	)
}
