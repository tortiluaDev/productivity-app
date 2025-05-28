import { useMyCardsStore } from '@/entities/card'
import { DeleteButton } from '@/shared/ui'

export function DeleteCardButton({ id }: { id: string }) {
	const deleteCard = useMyCardsStore(state => state.deleteCard)

	return <DeleteButton onClick={() => deleteCard(id)} />
}
