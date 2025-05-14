import { ChevronDown, ChevronUp } from 'lucide-react'

interface IProps {
	onToggle: () => void
	className?: string
	isShowMore: boolean
	hiddenCount?: number
}

export function ShowMoreAndHideButton({ onToggle, className, isShowMore, hiddenCount }: IProps) {
	return (
		<button
			onClick={onToggle}
			type='button'
			className={className}
		>
			{isShowMore ? <ChevronUp /> : <ChevronDown />}
			<p>{isShowMore ? 'Hide' : 'Show more'}</p>
			{!isShowMore && <p>{hiddenCount}</p>}
		</button>
	)
}
