import { IProps } from '@/shared/model'
import { SkeletonBlock } from '@/shared/ui'
import clsx from 'clsx'
import React, { useState } from 'react'

export const ImageWithSkeleton = React.memo(function ({ width, height, ...props }: IProps) {
	const [loaded, setLoaded] = useState(false)

	return (
		<div
			className={clsx('relative overflow-hidden', props.className)}
			style={{ width, height }}
		>
			{props.blurSrc && (
				<img
					src={props.blurSrc}
					alt={props.alt}
					aria-hidden
					loading={'lazy'}
					role={'presentation'}
					className={clsx(
						'absolute inset-0 rounded-sm object-cover blur-xl scale-105 transition-opacity duration-700',
						loaded ? 'opacity-0' : 'opacity-100'
					)}
				/>
			)}

			{props.src && (
				<img
					src={props.src}
					alt={props.alt}
					onLoad={() => setLoaded(true)}
					onClick={props.onClick}
					loading={'lazy'}
					className={clsx(
						'object-cover rounded-sm transition-opacity duration-500',
						loaded ? 'opacity-100' : 'opacity-0',
						props.onClick ? 'cursor-pointer' : ''
					)}
				/>
			)}

			{!props.blurSrc && !loaded && <SkeletonBlock className='absolute inset-0' />}
		</div>
	)
})
