import { ReactNode, createContext, useContext, useState } from 'react'

interface IIsEditCardContext {
	isEdit: boolean
	toggleIsEdit: () => void
}

const IsEditCardContext = createContext<IIsEditCardContext | null>(null)

export const IsEditCard = ({ children }: { children: ReactNode }) => {
	const [isEdit, setIsEdit] = useState(false)

	const toggleIsEdit = () => {
		setIsEdit(prev => !prev)
	}

	return (
		<IsEditCardContext.Provider value={{ isEdit, toggleIsEdit }}>
			{children}
		</IsEditCardContext.Provider>
	)
}

export const useIsEditCard = () => {
	const context = useContext(IsEditCardContext)
	if (!context) throw new Error('error with the useIsEditCardContext')
	return context
}
