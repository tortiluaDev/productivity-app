'use client'

import styles from './Sidebar.module.scss'
import { MENU_DATA, SidebarItem } from '@/entities/sidebarItem'
import { useSidebarState } from '@/widgets/sidebar/model/useSidebarState'
import MyBoardsMenu from '@/widgets/sidebar/ui/MyBoardsMenu'
import clsx from 'clsx'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

export function Sidebar() {
	const { isOpen, toggleSidebarState } = useSidebarState()

	return (
		<aside className={clsx(styles.sidebar, isOpen ? styles.openSidebar : styles.hiddenSidebar)}>
			{isOpen ? (
				<button
					className={clsx('group', styles.hideSidebarButton)}
					onClick={toggleSidebarState}
				>
					<ChevronLeftCircle
						size={22}
						className='opacity-30 group-hover:opacity-100 transition duration-150'
					/>
				</button>
			) : (
				<button
					className={clsx('group', styles.openSidebarButton)}
					onClick={toggleSidebarState}
				>
					<ChevronRightCircle
						size={28}
						className='opacity-30 group-hover:opacity-100 transition duration-150'
					/>
				</button>
			)}

			{isOpen &&
				MENU_DATA.map((item, index) => (
					<SidebarItem
						key={index}
						className={styles.sidebarItem}
						menuItem={item}
					/>
				))}

			{isOpen && <MyBoardsMenu className={styles.menu} />}
		</aside>
	)
}
