'use client'

import styles from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem'
import { MENU_DATA } from '@/widgets/sidebar/model/sidebar.data'
import { useSidebarState } from '@/widgets/sidebar/model/useSidebarState'
import MyBoardsMenu from '@/widgets/sidebar/ui/MyBoardsMenu'
import { SidebarToggleButton } from '@/widgets/sidebar/ui/SidebarToggleButton'
import clsx from 'clsx'

export function Sidebar() {
	const { isOpen, toggleSidebarState } = useSidebarState()

	return (
		<aside className={clsx(styles.sidebar, isOpen ? styles.openSidebar : styles.hiddenSidebar)}>
			<SidebarToggleButton
				isOpenSidebar={isOpen}
				toggleSidebarState={toggleSidebarState}
			/>

			{isOpen && (
				<>
					{MENU_DATA.map((item, index) => (
						<SidebarItem
							key={index}
							className={styles.sidebarItem}
							menuItem={item}
						/>
					))}
					<MyBoardsMenu />
				</>
			)}
		</aside>
	)
}
