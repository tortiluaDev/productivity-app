import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

interface CardEditSlotContextProps {
	editSlot?: ReactNode
}

const CardEditSlotContext = createContext<CardEditSlotContextProps | null>(null)

export const useCardEditSlot = () => {
	const context = useContext(CardEditSlotContext)
	if (!context) {
		throw new Error('useCardSlot must be used within a CardSlotProvider')
	}
	return context
}

export const CardEditSlotProvider = CardEditSlotContext.Provider
