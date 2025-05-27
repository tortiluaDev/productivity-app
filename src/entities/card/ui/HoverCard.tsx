import styles from './Card.module.scss'
import { Checkbox } from '@/entities/card/ui/Checkbox'
import { ArchiveX, Edit } from 'lucide-react'

interface IProps {
	handleMouseLeave: () => void
	text: string
	checkboxClickHandler: () => void
	picked: boolean
}

export function HoverCard({ handleMouseLeave, text, checkboxClickHandler, picked }: IProps) {
	return (
		<div
			className={styles.card}
			onMouseLeave={handleMouseLeave}
		>
			<Checkbox
				checkboxClickHandler={checkboxClickHandler}
				picked={picked}
			/>
			<span>{text}</span>
			<div className={styles.iconsWrapper}>
				{picked && (
					<button>
						<ArchiveX size={16} />
					</button>
				)}
				<button>
					<Edit size={16} />
				</button>
			</div>
		</div>
	)
}
