import { Card } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { AddButton } from '@/shared/ui'
import { Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'

export function Column({ name, id }: { name: string; id: string }) {
	const [text, setText] = useState(name)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const deleteColumn = useMyColumnsStore(state => state.deleteColumn)

	function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		inputRef.current?.blur()
	}

	function onDeleteHandler(columnId: string) {
		deleteColumn(columnId)
	}

	return (
		<div className='p-8 border-dark border-4 rounded bg-dark bg-opacity-20 w-[300px] shrink-0 select-none'>
			<div className='flex justify-between mb-4'>
				<form
					onSubmit={onSubmitHandler}
					className='w-4/5'
				>
					<input
						value={text}
						onChange={e => setText(e.target.value)}
						className='bg-transparent px-3 py-2 border border-transparent focus:border-accent transition duration-150 outline-none w-full h-auto'
						ref={inputRef}
					/>
				</form>
				<button
					className='text-xl font-bold'
					onClick={() => onDeleteHandler(id)}
				>
					<Trash2
						size={18}
						className='hover:text-red-400 transition duration-75'
					/>
				</button>
			</div>
			<hr className='mb-4 border border-dark rounded border-opacity-40' />
			<Card />
			<AddButton
				text='Add card'
				className='w-full'
			/>
		</div>
	)
}
