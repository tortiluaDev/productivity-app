import { useMyBoardsStore } from '@/entities/board'
import { useMyCardsStore } from '@/entities/card'
import { useMyColumnsStore } from '@/entities/column/model/myColumns.store'
import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface IProps {
	title: string
	slug: string
	img: string
	blurImg?: string
	id: string
}

export function Board({ title, slug, img, blurImg, id }: IProps) {
	const router = useRouter()
	const deleteBoard = useMyBoardsStore(state => state.removeBoard)
	const deleteColumn = useMyColumnsStore(state => state.deleteColumn)
	const columns = useMyColumnsStore(state => state.columns)
	const cards = useMyCardsStore(state => state.cards)
	const deleteCard = useMyCardsStore(state => state.deleteCard)

	function onDeleteHandler(boardId: string) {
		deleteBoard(boardId)
		cards.forEach(card => {
			columns.forEach(column => {
				const columnId = column.boardId === boardId ? column.id : ''
				if (card.columnId === columnId) deleteCard(card.id)
			})
		})
		columns.forEach(column => {
			if (column.boardId === boardId) deleteColumn(column.id)
		})
	}

	return (
		<div
			className='opacity-85 text-left rounded-xl relative h-40 cursor-pointer'
			onClick={() => router.push(`/b/${slug}`)}
		>
			<ImageWithSkeleton
				className='rounded-xl h-40'
				src={img}
				blurSrc={blurImg}
				alt={slug}
				isLazy={false}
			/>
			<p className='text-white font-bold break-words text-2xl absolute top-2 left-1.5'>{title}</p>
			<button
				className='text-xl font-bold absolute -translate-x-1/2 -translate-y-1/2 right-0.5 bottom-0'
				onClick={e => {
					e.stopPropagation()
					onDeleteHandler(id)
				}}
			>
				<Trash2
					size={18}
					className='hover:text-red-400 transition duration-75'
				/>
			</button>
		</div>
	)
}
