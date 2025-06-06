import styles from './Sidebar.module.scss'
import { useMyBoardsStore } from '@/entities/board'
import { ShowMoreAndHideButton } from '@/shared/ui'
import { ImageWithSkeleton } from '@/shared/ui/skeletons/ImageWithSkeleton'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function MyBoardsMenu() {
	const router = useRouter()
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
					onClick={() => router.push(`/b/${board.slug}`)}
				>
					<ImageWithSkeleton
						src={board.images.blurImg ?? board.images.img}
						alt={board.slug}
						blurSrc={board.images.blurImg}
						isLazy={false}
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
								onClick={() => router.push(`/b/${board.slug}`)}
							>
								<ImageWithSkeleton
									src={board.images.blurImg ?? board.images.img}
									alt={board.slug}
									blurSrc={board.images.blurImg}
									isLazy={true}
								/>
								<p className='group-hover:text-accent'>{board.name}</p>
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			{boards.length > 2 && (
				<ShowMoreAndHideButton
					onToggle={() => setIsShowMore(prev => !prev)}
					isShowMore={isShowMore}
					className={styles.btn}
					hiddenCount={boards.length - boardsSlice.length}
				/>
			)}
		</div>
	)
}

export default MyBoardsMenu
