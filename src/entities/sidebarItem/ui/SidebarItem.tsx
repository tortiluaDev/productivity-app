import type { IMenu_Data } from '@/entities/sidebarItem'
import clsx from 'clsx'
import Link from 'next/link'

interface ISidebarItemProps {
	menuItem: IMenu_Data
	className?: string
}

export function SidebarItem({ menuItem, className }: ISidebarItemProps) {
	return (
		<Link
			href={menuItem.link}
			className={clsx('group', className)}
		>
			<menuItem.icon size={24} />
			<span className='text-white group-hover:text-accent transition duration-75'>
				{menuItem.title}
			</span>
		</Link>
	)
}
