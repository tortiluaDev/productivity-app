import styles from '../TimerModal.module.scss'
import { ITimer } from '@/features/pomodoroTimer/model/store/myTimers.store.types'
import { formatTime } from '@/shared/lib'

export function TimerDisplay({ timer }: { timer: ITimer }) {
	return (
		<div className={styles.timer}>
			{timer && <span>{timer.currentMode === 'work' ? 'Work' : 'Break'}</span>}
			<p>{timer ? formatTime(timer.timeLeft) : '00:00'}</p>
		</div>
	)
}
