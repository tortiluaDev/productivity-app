import { AddCardForm } from '@/features/interactWithCard/addCard/ui/AddCardForm'
import { AddButton } from '@/shared/ui'
import { useState } from 'react'

export function AddCardButton({ columnId }: { columnId: string }) {
	const [isToggle, setIsToggle] = useState(false)
	const handleClick = () => {
		setIsToggle(true)
	}

	if (!isToggle)
		return (
			<AddButton
				text='Add card'
				onClick={handleClick}
				className='w-full'
			/>
		)

	if (isToggle)
		return (
			<AddCardForm
				setIsToggle={setIsToggle}
				columnId={columnId}
			/>
		)
}
