import { useIsEditCard } from '@/features/interactWithCard/editCard'
import { EditButton } from '@/shared/ui'

export function EditCardButton() {
	const { toggleIsEdit } = useIsEditCard()

	return <EditButton onClick={toggleIsEdit} />
}
