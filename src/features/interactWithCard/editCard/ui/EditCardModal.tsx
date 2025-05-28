import styles from './EditCardModal.module.scss'
import { ArchiveX, CalendarDays, Timer } from 'lucide-react'

export function EditCardModal({ setIsEdit }: { setIsEdit: (isEdit: boolean) => void }) {
	return (
		<div className='absolute z-50 grid grid-cols-2'>
			<div className='flex flex-col gap-3'>
				<textarea className='h-24 resize-none rounded bg-gray-800 px-3 py-2 border border-transparent focus:border-accent transition duration-150 outline-none w-full' />
				<button
					className='bg-primary hover:bg-accent transition duration-150 text-lg py-2 rounded-xl w-2/3'
					onClick={() => setIsEdit(false)}
				>
					Save
				</button>
			</div>
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
					<ArchiveX size={16} />
					Archive
				</li>
			</ul>
		</div>
	)
}
