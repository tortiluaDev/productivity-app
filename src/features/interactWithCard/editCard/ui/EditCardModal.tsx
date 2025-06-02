import styles from './EditCardModal.module.scss'
import { useMyCardsStore } from '@/entities/card'
import { useEditCard } from '@/features/interactWithCard/editCard'
import { TimerModal, useMyTimersStore } from '@/features/pomodoroTimer'
import { Button, DeleteButton } from '@/shared/ui'
import { ArchiveX, Timer } from 'lucide-react'
import { FormEvent, useState } from 'react'

interface IProps {
	setIsEdit: (isEdit: boolean) => void
	text: string
	id: string
}

export function EditCardModal({ setIsEdit, text, id }: IProps) {
	const [inputText, setInputText] = useState<string>(text)
	const [isTimerOpened, setIsTimerOpened] = useState(false)
	const editCard = useMyCardsStore(state => state.editCard)
	const deleteCard = useMyCardsStore(state => state.deleteCard)
	const removeTimer = useMyTimersStore(state => state.removeTimer)
	const { setEditCardId } = useEditCard()

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		editCard(id, inputText)
		setIsEdit(false)
		setInputText('')
	}

	const handlePomodoroClick = () => {
		setIsTimerOpened(true)
	}

	return (
		<div className='absolute -translate-y-1/2 z-[999] grid grid-cols-2'>
			{isTimerOpened && <TimerModal id={id} />}
			<form
				className='flex flex-col gap-3'
				onSubmit={onSubmitHandler}
			>
				<textarea
					className='h-24 resize-none rounded bg-gray-800 px-3 py-2 border border-transparent focus:border-accent transition duration-150 outline-none w-full'
					value={inputText}
					onChange={e => setInputText(e.target.value)}
				/>
				<button
					className='bg-primary hover:bg-accent transition duration-150 text-lg py-2 rounded-xl w-2/3 disabled:bg-primary'
					disabled={inputText.trim().length < 1}
					type={'submit'}
				>
					Save
				</button>
			</form>
			<ul className={styles.list}>
				{/*пока скип*/}
				{/*<li>*/}
				{/*	<CalendarDays size={16} />*/}
				{/*	Set dates*/}
				{/*</li>*/}
				<li>
					<Button
						text='Set pomodoro-timer'
						className='group w-full h-full px-3 py-2'
						onClick={() => handlePomodoroClick()}
					>
						<Timer
							size={16}
							className='group-hover:text-accent transition duration-[20ms]'
						/>
					</Button>
				</li>
				<li>
					<DeleteButton
						text='Archive'
						className='group w-full h-full px-3 py-2'
						onClick={() => {
							deleteCard(id)
							removeTimer(id)
							setEditCardId(null)
						}}
					>
						<ArchiveX
							size={16}
							className='group-hover:text-red-400 transition duration-[20ms]'
						/>
					</DeleteButton>
				</li>
			</ul>
		</div>
	)
}
