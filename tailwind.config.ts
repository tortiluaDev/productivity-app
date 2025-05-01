import { COLORS } from './src/shared/model/constants/colors.constants'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx}',
		'./src/features/**/*.{js,ts,jsx,tsx}',
		'./src/entities/**/*.{js,ts,jsx,tsx}',
		'./src/shared/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: COLORS,
			padding: {
				layout: '1.2rem'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '333ms'
			}
		}
	},
	plugins: []
}

export default config
