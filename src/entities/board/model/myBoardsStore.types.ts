interface IBoard {
	id: string
	name: string
	slug: string
	img: string
	blurImg?: string
}

export interface IStore {
	boards: IBoard[]
	addBoard: (text: string, img: string, blurImg?: string) => void
	removeBoard: (id: string) => void
	clearBoards: () => void
}
