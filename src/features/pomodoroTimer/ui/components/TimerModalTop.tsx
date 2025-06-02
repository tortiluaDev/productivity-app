import styles from '../TimerModal.module.scss'
import { X } from 'lucide-react'

interface IProps {
	id: string
	handleCompleteTodo: (id: string) => void
	setEditCardId: (id: string | null) => void
}

export function TimerModalTop({ id, handleCompleteTodo, setEditCardId }: IProps) {
	return (
		<div className={styles.modalTop}>
			<button
				className={styles.complete}
				onClick={() => handleCompleteTodo(id)}
			>
				Complete task
			</button>
			<button
				className={styles.close}
				onClick={() => setEditCardId(null)}
			>
				<X size={20} />
			</button>
		</div>
	)
}
