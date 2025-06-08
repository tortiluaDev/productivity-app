import Layout from '@/app/BaseLayout'
import type { PropsWithChildren } from 'react'

function PublicLayout({ children }: PropsWithChildren) {
	return <Layout>{children}</Layout>
}

export default PublicLayout
