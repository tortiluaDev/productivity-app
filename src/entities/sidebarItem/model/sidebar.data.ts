import type { LucideIcon } from 'lucide-react'
import { CircleUserRound, SquareKanban } from 'lucide-react'

export interface IMenu_Data {
	icon: LucideIcon
	title: string
	link: string
}

export const MENU_DATA: IMenu_Data[] = [
	{
		icon: CircleUserRound,
		title: 'Profile',
		link: '/account'
	},
	{
		icon: SquareKanban,
		title: 'Boards',
		link: '/'
	}
]
