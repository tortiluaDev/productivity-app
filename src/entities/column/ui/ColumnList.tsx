import { Column, IColumn } from '@/entities/column'
import { AddCardButton } from '@/features/interactWithCard/addCard'
import { DeleteColumnButton } from '@/features/interactWithColumn/deleteColumn'
import { RenameColumnForm } from '@/features/interactWithColumn/renameColumn'
import { Trash2 } from 'lucide-react'

export function ColumnList({ columns }: { columns: IColumn[] }) {
	return columns.map(column => (
		<Column
			id={column.id}
			key={column.id}
			AddSlot={<AddCardButton columnId={column.id} />}
			RenameSlot={
				<RenameColumnForm
					id={column.id}
					name={column.name}
				/>
			}
			DeleteSlot={
				<DeleteColumnButton id={column.id}>
					<Trash2 size={18} />
				</DeleteColumnButton>
			}
		/>
	))
}
