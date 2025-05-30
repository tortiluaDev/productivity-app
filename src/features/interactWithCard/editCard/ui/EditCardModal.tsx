import styles from './EditCardModal.module.scss'
import { useMyCardsStore } from '@/entities/card'
import { useEditCard } from '@/features/interactWithCard/editCard'
import { DeleteButton } from '@/shared/ui'
import { ArchiveX, CalendarDays, Timer } from 'lucide-react'
import { FormEvent, useState } from 'react'

interface IProps {
	setIsEdit: (isEdit: boolean) => void
	text: string
	id: string
}

export function EditCardModal({ setIsEdit, text, id }: IProps) {
	const [inputText, setInputText] = useState<string>(text)
	const editCard = useMyCardsStore(state => state.editCard)
	const deleteCard = useMyCardsStore(state => state.deleteCard)
	const { setEditCardId } = useEditCard()

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		editCard(id, inputText)
		setIsEdit(false)
		setInputText('')
	}

	return (
		<div className='absolute -translate-y-1/2 z-[999] grid grid-cols-2'>
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
				<li>
					<CalendarDays size={16} />
					Set dates
				</li>
				<li>
					<Timer size={16} />
					Set pomodoro-timer
				</li>
				<li>
					<DeleteButton
						text='Archive'
						className='group w-full h-full px-3 py-2'
						onClick={() => {
							deleteCard(id)
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
