import Layout from '@/app/BaseLayout'
import SessionWrapper from '@/app/account/SessionWrapper'
import { authOptions } from '@/app/configs/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import type { PropsWithChildren } from 'react'

async function AccountLayout({ children }: PropsWithChildren) {
	const session = await getServerSession(authOptions)

	if (!session) redirect('/api/auth/signin')

	return (
		<Layout>
			<SessionWrapper>{children}</SessionWrapper>
		</Layout>
	)
}

export default AccountLayout
