import { Howl } from 'howler'

const notificationSound = new Howl({
	src: ['/sounds/long_pop_sound.wav'],
	volume: 1
})

export const playNotification = () => {
	notificationSound.play()
}
