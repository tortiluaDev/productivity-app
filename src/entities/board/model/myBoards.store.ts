import { createSlug } from '@/entities/board/model/createSlug'
import { IStore } from '@/entities/board/model/myBoardsStore.types'
import { v4 as uuid } from 'uuid'
import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'

export const useMyBoardsStore = create<IStore>()(
	persist(
		set => ({
			boards: [],
			addBoard: (text, images) =>
				set(state => {
					const slug = createSlug(text)
					let uniqueSlug = slug
					let count = 1

					while (state.boards.some(board => board.slug === uniqueSlug)) {
						uniqueSlug = `${slug}-${count++}`
					}

					return {
						boards: [
							...state.boards,
							{
								id: uuid(),
								name: text,
								slug: uniqueSlug,
								images
							}
						]
					}
				}),
			removeBoard: id => set(state => ({ boards: state.boards.filter(board => board.id !== id) })),
			clearBoards: () => set(() => ({ boards: [] }))
		}),
		{
			name: 'boards-store'
		}
	)
)
