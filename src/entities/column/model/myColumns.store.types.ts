export interface IColumn {
	id: string
	name: string
	boardId: string
}

export interface IStore {
	columns: IColumn[]
	addColumn: (name: string, boardId: string) => void
	deleteColumn: (id: string) => void
}

interface ICard {
	id: string
	text: string
	isComplete: boolean
}
