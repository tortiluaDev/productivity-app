import { ReactNode, createContext, useContext, useState } from 'react'

interface IEditCardContext {
	editCardId: string | null
	setEditCardId: (id: string | null) => void
}

const EditCardContext = createContext<IEditCardContext | null>(null)

export const EditCard = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState<string | null>(null)

	const setEditCardId = (id: string | null) => {
		setState(id)
	}

	return (
		<EditCardContext.Provider value={{ editCardId: state, setEditCardId }}>
			{children}
		</EditCardContext.Provider>
	)
}

export const useEditCard = () => {
	const context = useContext(EditCardContext)
	if (!context) throw new Error('error with the useEditCardContext')
	return context
}
