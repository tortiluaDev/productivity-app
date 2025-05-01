import { Sidebar } from '@/widgets/sidebar/ui/Sidebar'
import { PropsWithChildren } from 'react'

function Layout({ children }: PropsWithChildren) {
	return (
		<div className='w-screen h-screen flex'>
			<Sidebar />
			<main className='h-full flex-1 bg-bg'>{children}</main>
		</div>
	)
}

export default Layout
