import React, { useContext, useRef } from 'react'

const TimerContext = React.createContext<React.RefObject<NodeJS.Timeout | null> | null>(null)

export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
	const intervalRef = useRef<NodeJS.Timeout | null>(null)
	return <TimerContext.Provider value={intervalRef}>{children}</TimerContext.Provider>
}

export const useTimerRef = () => {
	const ctx = useContext(TimerContext)
	if (!ctx) throw new Error('useTimerRef must be used within TimerProvider')
	return ctx
}
