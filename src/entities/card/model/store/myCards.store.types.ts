export interface IStore {
	cards: ICard[]
	addCard: (name: string, columnId: string) => void
	deleteCard: (id: string) => void
	editCard: (id: string, newText: string) => void
	toggleCheckbox: (id: string) => void
	removeCards: () => void
	reorderCardsInColumn: (activeId: string, overId: string) => void
	reorderCardsInBoard: (activeId: string, overId: string | null, toColId: string) => void
}

export interface ICard {
	id: string
	text: string
	isComplete: boolean
	columnId: string
}
