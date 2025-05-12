import styles from './Sidebar.module.scss'
import { useMyBoardsStore } from '@/entities/board'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

function MyBoardsMenu() {
	const boards = useMyBoardsStore(state => state.boards)
	const boardsSlice = boards.slice(0, 2)
	const [isShowMore, setIsShowMore] = useState(false)

	return (
		<div className={styles.menu}>
			<h2>My boards</h2>
			{boardsSlice.map(board => (
				<button
					key={board.id}
					className={clsx('group', styles.menuItem)}
				>
					<img
						src={board.img}
						alt={board.slug}
					/>
					<p className='group-hover:text-accent'>{board.name}</p>
				</button>
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
							<button
								key={board.id}
								className={clsx('group', styles.menuItem)}
							>
								<img
									src={board.img}
									alt={board.slug}
								/>
								<p className='group-hover:text-accent'>{board.name}</p>
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			{boards.length > 2 && (
				<button
					onClick={() => setIsShowMore(prev => !prev)}
					className={styles.btn}
				>
					{isShowMore ? <ChevronUp /> : <ChevronDown />}
					<p>{isShowMore ? 'Hide' : 'Show more'}</p>
					{!isShowMore && <p>{boards.length - boardsSlice.length}</p>}
				</button>
			)}
		</div>
	)
}

export default MyBoardsMenu
