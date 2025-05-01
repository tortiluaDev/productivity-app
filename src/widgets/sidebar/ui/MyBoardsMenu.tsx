import { ChevronDown } from 'lucide-react'

function MyBoardsMenu({ className }: { className?: string }) {
	return (
		<div className={className}>
			<h2>My boards</h2>
			<p>Board 1</p>
			<p>Board 2</p>
			<button>
				<ChevronDown />
				<p>Show more</p>
				<p>1</p>
			</button>
		</div>
	)
}

export default MyBoardsMenu
