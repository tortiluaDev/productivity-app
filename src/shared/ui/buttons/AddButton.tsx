import clsx from 'clsx'
import { Plus } from 'lucide-react'
import React from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export function AddButton({ text, className, ...props }: IProps) {
	return (
		<button
			className={clsx(
				'p-4 text-sm rounded-xl text-center font-bold flex items-center justify-between hover:bg-primary hover:bg-opacity-70 transition duration-75',
				className
			)}
			{...props}
		>
			<Plus size={18} />
			{text}
		</button>
	)
}
