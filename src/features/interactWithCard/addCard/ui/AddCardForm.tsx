import { useMyCardsStore } from '@/entities/card'
import React, { useRef, useState } from 'react'

interface IProps {
	setIsToggle: (arg: boolean) => void
	columnId: string
}

export function AddCardForm({ setIsToggle, columnId }: IProps) {
	const [text, setText] = useState('')
	const inputRef = useRef<HTMLInputElement | null>(null)
	const addCard = useMyCardsStore(state => state.addCard)

	function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (text.trim().length > 0) {
			inputRef.current?.blur()
			setIsToggle(false)
			addCard(text, columnId)
			setText('')
		} else {
			inputRef.current?.blur()
			setIsToggle(false)
		}
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<input
				value={text}
				onChange={e => setText(e.target.value)}
				className='rounded bg-dark bg-opacity-60 px-3 py-2 border border-transparent focus:border-accent transition duration-150 outline-none w-full h-auto'
				ref={inputRef}
			/>
		</form>
	)
}
