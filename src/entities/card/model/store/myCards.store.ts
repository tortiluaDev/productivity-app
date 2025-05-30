import { IStore } from '@/entities/card/model/store/myCards.store.types'
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
			removeCards: () => set(() => ({ cards: [] }))
		}),
		{
			name: 'cards-store'
		}
	)
)
