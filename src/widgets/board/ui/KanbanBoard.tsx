import { IBoard } from '@/entities/board'
import { Column, IColumn } from '@/entities/column'
import { useEditCard } from '@/features/interactWithCard/editCard'
import { DeleteColumnButton } from '@/features/interactWithColumn/deleteColumn'
import { RenameColumnForm } from '@/features/interactWithColumn/renameColumn'
import { useMyTimersStore } from '@/features/pomodoroTimer'
import { playNotification } from '@/shared/utils'
import { TopPanel } from '@/widgets/board'
import { Trash2 } from 'lucide-react'
import { Ref, useEffect } from 'react'
import { toast } from 'react-toastify'
import { AddCardButton } from 'src/features/interactWithCard/addCard'
import { AddColumnButton } from 'src/features/interactWithColumn/addColumn'

interface IProps {
	board: IBoard
	columns: IColumn[]
	scrollRef: Ref<HTMLDivElement> | null
}

export function KanbanBoard({ board, columns, scrollRef }: IProps) {
	const { editCardId, setEditCardId } = useEditCard()
	const workNotify = () => toast.info('Time to work')
	const breakNotify = () => toast.info('Time to break')
	const timers = useMyTimersStore(state => state.timers)
	const activeTimerCardId = useMyTimersStore(state => state.activeTimerCardId)
	const activeTimer = timers[activeTimerCardId ? activeTimerCardId : '']

	useEffect(() => {
		if (activeTimer?.currentMode === 'work') {
			workNotify()
			playNotification()
		} else if (activeTimer?.currentMode === 'break') {
			breakNotify()
			playNotification()
		}
	}, [activeTimer?.currentMode])

	return (
		<div
			style={{
				backgroundImage: `url(${board.images.img}`
			}}
			className='bg-blue-300 relative h-screen bg-cover bg-center text-white'
		>
			{editCardId && (
				<div
					className={'h-screen w-screen bg-black bg-opacity-55 absolute z-40'}
					onClick={() => setEditCardId(null)}
				/>
			)}
			<div className='absolute inset-0 bg-black/40' />
			<TopPanel boardName={board.name} />
			<div
				ref={scrollRef}
				className='relative h-screen pt-28 overflow-x-auto cursor-grab active:cursor-grabbing'
			>
				<div className='p-12 flex gap-5 items-start min-w-max'>
					{columns.map(column => {
						if (column.boardId === board.id)
							return (
								<Column
									id={column.id}
									key={column.id}
									AddSlot={<AddCardButton columnId={column.id} />}
									RenameSlot={
										<RenameColumnForm
											id={column.id}
											name={column.name}
										/>
									}
									DeleteSlot={
										<DeleteColumnButton id={column.id}>
											<Trash2 size={18} />
										</DeleteColumnButton>
									}
								/>
							)
					})}
					<AddColumnButton boardId={board.id} />
				</div>
			</div>
		</div>
	)
}
