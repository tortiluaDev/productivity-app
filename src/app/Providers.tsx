'use client'

import { IsEditCard } from '@/features/interactWithCard/editCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<IsEditCard>
				{children}
				<Toaster
					position={'top-right'}
					reverseOrder={false}
				/>
				<ReactQueryDevtools initialIsOpen={false} />
			</IsEditCard>
		</QueryClientProvider>
	)
}

export default Providers
