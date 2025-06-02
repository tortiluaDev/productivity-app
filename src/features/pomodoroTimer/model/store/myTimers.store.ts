import { IStore } from '@/features/pomodoroTimer/model/store/myTimers.store.types'
import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'

export const useMyTimersStore = create<IStore>()(
	persist(
		set => ({
			timers: {},
			activeTimerCardId: null,
			addTimer: timer =>
				set(state => ({
					timers: { ...state.timers, [timer.cardId]: timer },
					activeTimerCardId: state.activeTimerCardId
				})),
			removeTimer: cardId =>
				set(state => {
					const newTimers = { ...state.timers }
					delete newTimers[cardId]

					return {
						timers: newTimers,
						activeTimerCardId: state.activeTimerCardId === cardId ? null : state.activeTimerCardId
					}
				}),
			startTimer: cardId =>
				set(state => {
					const timer = state.timers[cardId]
					if (!timer) return state

					const updatedTimers = { ...state.timers }
					if (state.activeTimerCardId && state.activeTimerCardId !== cardId) {
						const prev = updatedTimers[state.activeTimerCardId]
						if (prev) updatedTimers[state.activeTimerCardId] = { ...prev, isRunning: false }
					}

					updatedTimers[cardId] = { ...timer, isRunning: true }

					return {
						timers: updatedTimers,
						activeTimerCardId: cardId
					}
				}),
			pauseTimer: cardId =>
				set(state => {
					const timer = state.timers[cardId]
					if (!timer) return state

					return {
						timers: {
							...state.timers,
							[cardId]: { ...timer, isRunning: false }
						},
						activeTimerCardId: state.activeTimerCardId === cardId ? null : state.activeTimerCardId
					}
				}),
			resetTimer: cardId =>
				set(state => {
					const timer = state.timers[cardId]
					if (!timer) return state

					const duration = timer.currentMode === 'work' ? timer.workDuration : timer.breakDuration

					return {
						timers: {
							...state.timers,
							[cardId]: { ...timer, timeLeft: duration * 60, isRunning: false }
						},
						activeTimerCardId: state.activeTimerCardId === cardId ? null : state.activeTimerCardId
					}
				}),
			tick: cardId =>
				set(state => {
					const timer = state.timers[cardId]
					if (!timer) return state

					const newTime = timer.timeLeft - 1
					const isFinished = newTime <= 0

					const nextMode = timer.currentMode === 'work' ? 'break' : 'work'
					const nextDuration = nextMode === 'work' ? timer.workDuration : timer.breakDuration

					return {
						timers: {
							...state.timers,
							[cardId]: {
								...timer,
								timeLeft: isFinished ? nextDuration * 60 : newTime,
								currentMode: isFinished ? nextMode : timer.currentMode,
								isRunning: isFinished ? true : timer.isRunning
							}
						}
					}
				}),
			switchMode: cardId =>
				set(state => {
					const timer = state.timers[cardId]
					if (!timer) return state

					const nextMode = timer.currentMode === 'work' ? 'break' : 'work'
					const nextDuration = nextMode === 'work' ? timer.workDuration : timer.breakDuration

					return {
						timers: {
							...state.timers,
							[cardId]: {
								...timer,
								timeLeft: nextDuration * 60,
								currentMode: nextMode,
								isRunning: false
							}
						}
					}
				})
		}),
		{
			name: 'pomodoroTimer-store'
		}
	)
)
