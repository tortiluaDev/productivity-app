interface IProps {
	title: string
	slug: string
}

export function Board({ title, slug }: IProps) {
	return (
		<button className='text-white bg-accent flex flex-col items-start opacity-85 min-h-28 text-left rounded-xl px-3 py-4'>
			<p className='font-bold break-words text-2xl'>{title}</p>
		</button>
	)
}
