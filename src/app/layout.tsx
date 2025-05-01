import './globals.scss'
import Providers from '@/app/Providers'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Productivity App',
	description: 'Simplified Trello | Kanban'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${roboto.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
