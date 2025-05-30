import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import React, { useRef, useState } from 'react'

interface IProps {
	name: string
	id: string
}

export function RenameColumnForm({ name, id }: IProps) {
	const [text, setText] = useState(name)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const renameColumn = useMyColumnsStore(state => state.renameColumn)

	function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		renameColumn(id, text)
		inputRef.current?.blur()
	}

	return (
		<form
			onSubmit={onSubmitHandler}
			className='w-4/5'
		>
			<input
				value={text}
				onChange={e => setText(e.target.value)}
				className='bg-transparent text-lg font-bold px-3 py-2 border border-transparent focus:border-accent transition duration-150 outline-none w-full h-auto'
				ref={inputRef}
			/>
		</form>
	)
}
