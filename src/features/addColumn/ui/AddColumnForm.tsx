import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import React, { useRef, useState } from 'react'

export function AddColumnForm({
	setIsToggle,
	boardId
}: {
	setIsToggle: (arg: boolean) => void
	boardId: string
}) {
	const [text, setText] = useState('')
	const inputRef = useRef<HTMLInputElement | null>(null)
	const addColumn = useMyColumnsStore(state => state.addColumn)

	function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (text.trim().length > 0) {
			inputRef.current?.blur()
			setIsToggle(false)
			addColumn(text, boardId)
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
