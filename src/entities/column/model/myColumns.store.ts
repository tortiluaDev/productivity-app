import { IStore } from '@/entities/column/model/myColumns.store.types'
import { v4 as uuid } from 'uuid'
import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'

export const useMyColumnsStore = create<IStore>()(
	persist(
		set => ({
			columns: [],
			addColumn: (name, boardId) =>
				set(state => ({ columns: [...state.columns, { id: uuid(), name, boardId }] })),
			deleteColumn: id =>
				set(state => ({ columns: state.columns.filter(column => column.id !== id) })),
			renameColumn: (id, newName) =>
				set(state => ({
					columns: state.columns.map(column => {
						if (column.id === id)
							return {
								...column,
								name: newName
							}
						else return column
					})
				})),
			removeColumns: () => set(() => ({ columns: [] }))
		}),
		{
			name: 'columns-store'
		}
	)
)
