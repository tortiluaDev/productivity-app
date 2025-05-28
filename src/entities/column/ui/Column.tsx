import { Card, useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { Trash2 } from 'lucide-react'
import React, { ReactNode, useRef, useState } from 'react'

interface IProps {
	name: string
	id: string
	children: ReactNode
}

export function Column({ name, id, children }: IProps) {
	const [text, setText] = useState(name)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const deleteColumn = useMyColumnsStore(state => state.deleteColumn)
	const renameColumn = useMyColumnsStore(state => state.renameColumn)
	const deleteCard = useMyCardsStore(state => state.deleteCard)
	const cards = useMyCardsStore(state => state.cards)

	function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		renameColumn(id, text)
		inputRef.current?.blur()
	}

	function onDeleteHandler(columnId: string) {
		deleteColumn(columnId)
		cards.forEach(card => {
			if (card.columnId === columnId) deleteCard(card.id)
		})
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
						className='bg-transparent text-lg font-bold px-3 py-2 border border-transparent focus:border-accent transition duration-150 outline-none w-full h-auto'
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
			{cards.map(card => {
				if (card.columnId === id)
					return (
						<Card
							key={card.id}
							card={card}
						/>
					)
			})}
			{children}
		</div>
	)
}
