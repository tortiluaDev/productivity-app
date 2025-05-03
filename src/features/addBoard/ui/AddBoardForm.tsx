import styles from './createBoardForm.module.scss'
import { CircleX } from 'lucide-react'
import React from 'react'

interface IProps {
	handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void
	setBoardName: (text: string) => void
	boardName: string
	setIsOpenCreateBoardModal: (isOpen: boolean) => void
}

export function AddBoardForm({
	handleSubmitForm,
	setBoardName,
	boardName,
	setIsOpenCreateBoardModal
}: IProps) {
	return (
		<form
			action=''
			onSubmit={handleSubmitForm}
			className={styles.form}
		>
			<div>
				<input
					type='text'
					placeholder='Enter board name'
					onChange={e => setBoardName(e.target.value)}
					value={boardName}
				/>
				<button
					type='button'
					onClick={() => setIsOpenCreateBoardModal(false)}
				>
					<CircleX />
				</button>
			</div>
			<button
				type='submit'
				disabled={boardName.length < 1}
			>
				Create
			</button>
		</form>
	)
}
