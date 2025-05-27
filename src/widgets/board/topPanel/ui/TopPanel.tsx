export function TopPanel({ boardName }: { boardName: string }) {
	return (
		<div className='relative z-10 text-left bg-primary bg-opacity-25 p-10 text-3xl font-bold'>
			{boardName}
		</div>
	)
}
