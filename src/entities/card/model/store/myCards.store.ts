import { IStore } from '@/entities/card/model/store/myCards.store.types'
import { arrayMove } from '@dnd-kit/sortable'
import { v4 as uuid } from 'uuid'
import { persist } from 'zustand/middleware'
import { create } from 'zustand/react'

export const useMyCardsStore = create<IStore>()(
	persist(
		set => ({
			cards: [],
			addCard: (text, columnId) =>
				set(state => ({
					cards: [...state.cards, { id: uuid(), text, columnId, isComplete: false }]
				})),
			deleteCard: id => set(state => ({ cards: state.cards.filter(card => card.id !== id) })),
			editCard: (id, newText) =>
				set(state => ({
					cards: state.cards.map(card => {
						if (card.id === id)
							return {
								...card,
								text: newText
							}
						else return card
					})
				})),
			toggleCheckbox: id =>
				set(state => ({
					cards: state.cards.map(card => {
						if (card.id === id)
							return {
								...card,
								isComplete: !card.isComplete
							}
						else return card
					})
				})),
			removeCards: () => set(() => ({ cards: [] })),
			reorderCardsInColumn: (activeId, overId) =>
				set(state => {
					const activeCard = state.cards.find(card => card.id === activeId)
					const targetCard = state.cards.find(card => card.id === overId)
					if (!activeCard || !targetCard) return { cards: state.cards }

					const columnCards = state.cards.filter(card => card.columnId === activeCard.columnId)
					const fromIndex = columnCards.findIndex(card => card.id === activeId)
					const toIndex = columnCards.findIndex(card => card.id === overId)

					if (fromIndex === toIndex) return { cards: state.cards }

					const moved = arrayMove(columnCards, fromIndex, toIndex)
					const untouched = state.cards.filter(card => card.columnId !== activeCard.columnId)

					return { cards: [...untouched, ...moved] }
				}),
			reorderCardsInBoard: (activeId, overId, toColId) =>
				set(state => {
					const activeCard = state.cards.find(card => card.id === activeId)
					if (!activeCard) return { cards: state.cards }

					const fromColId = activeCard.columnId
					const updatedActiveCard = { ...activeCard, columnId: toColId }

					const fromColCards = state.cards.filter(card => card.columnId === fromColId)
					const toColCards = state.cards.filter(card => card.columnId === toColId)
					const columnsCards = toColCards.concat(fromColCards.filter(card => card.id !== activeId))
					const fromIndex = columnsCards.length

					const untouched = state.cards.filter(
						card => card.columnId !== fromColId && card.columnId !== toColId
					)

					if (!overId) {
						return {
							cards: [
								...untouched,
								...toColCards,
								updatedActiveCard,
								...fromColCards.filter(card => card.id !== activeId)
							]
						}
					} else {
						columnsCards.splice(fromIndex, 0, updatedActiveCard)
						return { cards: [...untouched, ...columnsCards] }
					}
				})
		}),
		{
			name: 'cards-store'
		}
	)
)
