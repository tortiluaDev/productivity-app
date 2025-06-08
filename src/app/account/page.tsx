'use client'

import { Account } from '@/widgets/account'
import { useSession } from 'next-auth/react'

export default function AccountPage() {
	const { data } = useSession()
	const user = data?.user

	return user && <Account user={user} />
}
