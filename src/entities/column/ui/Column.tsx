import { CardList } from '@/entities/card'
import React, { ReactNode } from 'react'

interface IProps {
	id: string
	RenameSlot?: ReactNode
	DeleteSlot?: ReactNode
	AddSlot?: ReactNode
}

export function Column({ id, RenameSlot, DeleteSlot, AddSlot }: IProps) {
	return (
		<div className='p-8 border-dark border-4 rounded bg-dark bg-opacity-20 w-[300px] shrink-0 select-none'>
			<div className='flex justify-between mb-4'>
				{RenameSlot}
				{DeleteSlot}
			</div>
			<hr className='mb-4 border border-dark rounded border-opacity-40' />
			<CardList columnId={id} />
			{AddSlot}
		</div>
	)
}
