import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

interface CardDeleteSlotContextProps {
	deleteSlot?: ReactNode
}

const CardDeleteSlotContext = createContext<CardDeleteSlotContextProps | null>(null)

export const useCardDeleteSlot = () => {
	const context = useContext(CardDeleteSlotContext)
	if (!context) {
		throw new Error('useCardSlot must be used within a CardSlotProvider')
	}
	return context
}

export const CardDeleteSlotProvider = CardDeleteSlotContext.Provider
