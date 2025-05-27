import styles from './Sidebar.module.scss'
import clsx from 'clsx'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'

interface IProps {
	isOpenSidebar: boolean
	toggleSidebarState: () => void
}

export function SidebarToggleButton({ isOpenSidebar, toggleSidebarState }: IProps) {
	return (
		<button
			className={clsx(
				'group z-50',
				isOpenSidebar ? styles.hideSidebarButton : styles.openSidebarButton
			)}
			onClick={toggleSidebarState}
		>
			{isOpenSidebar ? (
				<ChevronLeftCircle
					size={22}
					className='opacity-30 group-hover:opacity-100 transition duration-150'
				/>
			) : (
				<ChevronRightCircle
					size={28}
					className='opacity-30 group-hover:opacity-100 transition duration-150'
				/>
			)}
		</button>
	)
}
