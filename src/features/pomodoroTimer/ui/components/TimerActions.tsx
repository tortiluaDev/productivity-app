import styles from '../TimerModal.module.scss'
import clsx from 'clsx'

interface IProps {
	resetTimer: (id: string) => void
	handleStartTimer: () => void
	handleStopTimer: () => void
	isRunning: boolean
	id: string
}

export function TimerActions({
	resetTimer,
	isRunning,
	handleStartTimer,
	handleStopTimer,
	id
}: IProps) {
	return (
		<div className={styles.modalBottom}>
			<button
				className={styles.resetBtn}
				onClick={() => resetTimer(id)}
			>
				Reset time
			</button>
			<button
				className={clsx(!isRunning ? styles.startBtn : styles.stopBtn, 'w-2/3 rounded')}
				onClick={() => (!isRunning ? handleStartTimer() : handleStopTimer())}
			>
				{!isRunning ? 'Start' : 'Stop'}
			</button>
		</div>
	)
}
