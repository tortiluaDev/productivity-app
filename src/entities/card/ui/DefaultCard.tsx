import styles from './Card.module.scss'
import { ReactNode } from 'react'

interface IProps {
	handleMouseEnter: () => void
	handleMouseLeave: () => void
	text: string
	children?: ReactNode
}

export function DefaultCard({ handleMouseEnter, handleMouseLeave, text, children }: IProps) {
	return (
		<div
			className={styles.cardDefault}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			<span>{text}</span>
		</div>
	)
}
