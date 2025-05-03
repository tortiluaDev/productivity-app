import { useMyBoardsStore } from '@/entities/board'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

function MyBoardsMenu({ className }: { className?: string }) {
	const boards = useMyBoardsStore(state => state.boards)
	const boardsSlice = boards.slice(0, 2)
	const [isShowMore, setIsShowMore] = useState(false)

	return (
		<div className={className}>
			<h2>My boards</h2>
			{boardsSlice.map(board => (
				<p key={board.id}>{board.name}</p>
			))}
			<AnimatePresence initial={false}>
				{isShowMore && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.25, ease: 'anticipate' }}
					>
						{boards.slice(2).map(board => (
							<p key={board.id}>{board.name}</p>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			{boards.length > 2 && (
				<button onClick={() => setIsShowMore(prev => !prev)}>
					{isShowMore ? <ChevronUp /> : <ChevronDown />}
					<p>{isShowMore ? 'Hide' : 'Show more'}</p>
					{!isShowMore && <p>{boards.length - boardsSlice.length}</p>}
				</button>
			)}
		</div>
	)
}

export default MyBoardsMenu
