import React from 'react'

export interface IProps {
	src: string
	alt: string
	width?: string
	height?: string
	className?: string
	blurSrc?: string
	onClick?: React.MouseEventHandler<HTMLImageElement>
	isLazy?: boolean
}
