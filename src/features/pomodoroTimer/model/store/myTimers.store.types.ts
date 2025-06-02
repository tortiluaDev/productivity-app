export interface ITimer {
	cardId: string
	workDuration: number // min
	breakDuration: number // min
	timeLeft: number // sec
	currentMode: 'work' | 'break'
	isRunning: boolean
}

export interface IStore {
	timers: Record<string, ITimer> // key = cardId
	activeTimerCardId: string | null
	addTimer: (timer: ITimer) => void
	removeTimer: (cardId: string) => void
	startTimer: (newActiveTimerCardId: string) => void
	pauseTimer: (activeTimerCardId: string) => void
	resetTimer: (cardId: string) => void
	tick: (activeTimerCardId: string) => void
	switchMode: (cardId: string) => void // можно убрать
}
