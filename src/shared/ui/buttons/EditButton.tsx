import { Edit } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function EditButton(props: IProps) {
	return (
		<button
			{...props}
			className='hover:text-accent transition duration-75'
		>
			<Edit size={16} />
		</button>
	)
}
