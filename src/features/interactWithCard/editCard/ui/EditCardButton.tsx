import { useEditCard } from '@/features/interactWithCard/editCard'
import { EditButton } from '@/shared/ui'

export function EditCardButton({ id }: { id: string }) {
	const { setEditCardId } = useEditCard()

	return <EditButton onClick={() => setEditCardId(id)} />
}
