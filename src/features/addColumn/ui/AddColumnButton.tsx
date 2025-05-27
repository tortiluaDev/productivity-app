import { AddColumnForm } from '@/features/addColumn/ui/AddColumnForm'
import { AddButton } from '@/shared/ui'
import { useState } from 'react'

export function AddColumnButton({ boardId }: { boardId: string }) {
	const [isToggle, setIsToggle] = useState(false)
	const handleClick = () => {
		setIsToggle(true)
	}

	if (!isToggle)
		return (
			<AddButton
				text='Add column'
				onClick={handleClick}
				className='rounded bg-dark bg-opacity-60'
			/>
		)

	if (isToggle)
		return (
			<AddColumnForm
				setIsToggle={setIsToggle}
				boardId={boardId}
			/>
		)
}
