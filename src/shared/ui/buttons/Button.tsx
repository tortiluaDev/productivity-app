import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string
	children: ReactNode
}

export function Button({ text, children, className, ...props }: IProps) {
	return (
		<button
			className={clsx(
				text && 'flex items-center gap-2 hover:text-white',
				className,
				'hover:text-accent transition duration-75'
			)}
			{...props}
		>
			{children}
			{text}
		</button>
	)
}
