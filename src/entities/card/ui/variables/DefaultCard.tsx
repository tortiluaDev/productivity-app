import styles from '../Card.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface IProps {
	handleMouseEnter: () => void
	handleMouseLeave: () => void
	text: string
	isComplete: boolean
	children: ReactNode
	className: string
}

export function DefaultCard({
	handleMouseEnter,
	handleMouseLeave,
	text,
	isComplete,
	children,
	className
}: IProps) {
	return (
		<div
			className={clsx(styles.cardDefault, className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{isComplete && children}
			<span>{text}</span>
		</div>
	)
}
