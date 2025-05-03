interface IBoard {
	id: string
	name: string
	slug: string
}

export interface IStore {
	boards: IBoard[]
	addBoard: (text: string) => void
	removeBoard: (id: string) => void
	clearBoards: () => void
}
