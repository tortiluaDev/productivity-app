import clsx from 'clsx'

interface IProps {
	width?: string
	height?: string
	className?: string
}

export function SkeletonBlock({ width, height, className }: IProps) {
	return (
		<div
			className={clsx('animate-pulse bg-gray-400 rounded', className)}
			style={{ width, height }}
		/>
	)
}
