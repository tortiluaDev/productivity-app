'use client'

import styles from './Account.module.scss'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

interface IProps {
	user: {
		name?: string | null
		email?: string | null
		image?: string | null
	}
}

export function Account({ user }: IProps) {
	return (
		<div className={styles.wrapper}>
			<h1>Your profile</h1>
			<div className={styles.imgWrapper}>
				{user?.image && (
					<Image
						width={80}
						height={80}
						src={user?.image}
						alt='profile image'
						className='rounded-full'
					/>
				)}
				<div className={styles.data}>
					<p>Name: {user?.name}</p>
					<p>Email: {user?.email}</p>
				</div>
			</div>
			<button
				className={styles.signOutBtn}
				onClick={() => signOut({ callbackUrl: '/' })}
			>
				Sign out
			</button>
		</div>
	)
}
