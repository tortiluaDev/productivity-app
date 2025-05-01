import { useState } from 'react'

export function useSidebarState() {
	const [isOpen, setIsOpen] = useState(true)

	const toggleSidebarState = () => setIsOpen(prev => !prev)

	return { isOpen, toggleSidebarState }
}
