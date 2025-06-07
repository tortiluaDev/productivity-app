import { Spinner } from '@/shared/ui'

export function PageLoader() {
	return (
		<div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
			<Spinner />
			<p className='text-xl font-bold pt-3'>Page is loading...</p>
		</div>
	)
}
