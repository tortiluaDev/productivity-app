import { CardList, useMyCardsStore } from '@/entities/card'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React, { ReactNode } from 'react'

interface IProps {
	id: string
	RenameSlot?: ReactNode
	DeleteSlot?: ReactNode
	AddSlot?: ReactNode
	nameForDnD?: string
}

export function Column({ id, RenameSlot, DeleteSlot, AddSlot, nameForDnD }: IProps) {
	const { setNodeRef, attributes, listeners, transform, transition } = useSortable({ id: id })
	const allCards = useMyCardsStore(state => state.cards)
	const cards = allCards.filter(card => card.columnId === id)

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	}

	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
			className='p-8 border-dark border-4 rounded bg-dark bg-opacity-20 w-[300px] shrink-0 select-none'
		>
			<div className='flex justify-between mb-4'>
				{nameForDnD && nameForDnD}
				{RenameSlot}
				{DeleteSlot}
			</div>
			<hr className='mb-4 border border-dark rounded border-opacity-40' />
			<SortableContext
				items={cards.map(card => card.id)}
				strategy={verticalListSortingStrategy}
			>
				<CardList columnId={id} />
			</SortableContext>
			{AddSlot}
		</div>
	)
}
