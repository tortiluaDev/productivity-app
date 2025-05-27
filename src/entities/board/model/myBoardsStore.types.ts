export interface IBoard {
	id: string
	name: string
	slug: string
	images: IImages
}

export interface IStore {
	boards: IBoard[]
	addBoard: (text: string, images: IImages) => void
	removeBoard: (id: string) => void
	clearBoards: () => void
}

interface IImages {
	img: string
	blurImg?: string
	enhancedImg?: string
}
