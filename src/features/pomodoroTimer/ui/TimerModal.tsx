import styles from './TimerModal.module.scss'
import { useMyCardsStore } from '@/entities/card'
import { useEditCard } from '@/features/interactWithCard/editCard'
import { useMyTimersStore, useTimerRef } from '@/features/pomodoroTimer'
import { TimerActions } from '@/features/pomodoroTimer/ui/components/TimerActions'
import { TimerDisplay } from '@/features/pomodoroTimer/ui/components/TimerDisplay'
import { TimerForm } from '@/features/pomodoroTimer/ui/components/TimerForm'
import { TimerModalTop } from '@/features/pomodoroTimer/ui/components/TimerModalTop'
import { FormEvent, useState } from 'react'

export function TimerModal({ id }: { id: string }) {
	const [workTime, setWorkTime] = useState<number>(40)
	const [breakTime, setBreakTime] = useState<number>(10)
	const { setEditCardId } = useEditCard()
	const timerRef = useTimerRef()
	const setComplete = useMyCardsStore(state => state.toggleCheckbox)

	const addTimer = useMyTimersStore(state => state.addTimer)
	const removeTimer = useMyTimersStore(state => state.removeTimer)
	const resetTimer = useMyTimersStore(state => state.resetTimer)
	const startTimer = useMyTimersStore(state => state.startTimer)
	const pauseTimer = useMyTimersStore(state => state.pauseTimer)
	const tick = useMyTimersStore(state => state.tick)
	const timers = useMyTimersStore(state => state.timers)

	const timer = timers[id]

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (timer) removeTimer(id)
		addTimer({
			cardId: id,
			workDuration: workTime,
			breakDuration: breakTime,
			isRunning: false,
			currentMode: 'work',
			timeLeft: workTime * 60
		})
	}

	const handleCompleteTodo = (id: string) => {
		removeTimer(id)
		setEditCardId(null)
		setComplete(id)
	}

	const handleStartTimer = () => {
		if (!timerRef.current) {
			startTimer(id)
			timerRef.current = setInterval(() => {
				tick(id)
			}, 1000)
		}
	}

	const handleStopTimer = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current)
			timerRef.current = null
			pauseTimer(id)
		}
	}

	return (
		<div className={styles.modal}>
			<TimerModalTop
				id={id}
				handleCompleteTodo={handleCompleteTodo}
				setEditCardId={setEditCardId}
			/>
			<TimerDisplay timer={timer} />
			<TimerForm
				onSubmitHandler={onSubmitHandler}
				workTime={workTime}
				breakTime={breakTime}
				setWorkTime={setWorkTime}
				setBreakTime={setBreakTime}
			/>
			<TimerActions
				resetTimer={resetTimer}
				handleStartTimer={handleStartTimer}
				handleStopTimer={handleStopTimer}
				isRunning={timer?.isRunning}
				id={id}
			/>
		</div>
	)
}
