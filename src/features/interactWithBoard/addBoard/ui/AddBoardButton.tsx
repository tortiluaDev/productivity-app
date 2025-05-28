import { CirclePlus } from 'lucide-react'

export function AddBoardButton({ handleClick }: { handleClick: () => void }) {
	return (
		<button
			onClick={handleClick}
			className='group flex flex-col items-center justify-center text-white bg-dark min-h-20 rounded-xl'
		>
			<CirclePlus
				size={26}
				aria-label={'add board'}
				className='opacity-70 group-hover:opacity-100 transition duration-75'
			/>
			<p className='font-bold break-words pt-1 opacity-70 group-hover:opacity-100 transition duration-75'>
				Add board
			</p>
		</button>
	)
}
