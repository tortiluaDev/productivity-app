import clsx from 'clsx'
import { ArchiveX } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string
}

export function DeleteButton({ text, ...props }: IProps) {
	return (
		<button
			className={clsx(text && 'flex gap-2', 'hover:text-red-400 transition duration-75')}
			{...props}
		>
			<ArchiveX size={16} />
			{text}
		</button>
	)
}
