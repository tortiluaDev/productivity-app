import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],

			'react/jsx-key': 'warn',
			'react/self-closing-comp': ['warn', { component: true, html: true }],

			'@typescript-eslint/consistent-type-imports': 'warn',
			'@typescript-eslint/prefer-ts-expect-error': 'warn',

			semi: ['warn', 'never'],
			'comma-dangle': ['warn', 'never'],
			'object-curly-spacing': ['none']
		}
	}
]

export default eslintConfig
