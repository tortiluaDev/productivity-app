import { Dispatch, FormEvent, SetStateAction } from 'react'

interface IProps {
	onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void
	workTime: number
	breakTime: number
	setWorkTime: Dispatch<SetStateAction<number>>
	setBreakTime: Dispatch<SetStateAction<number>>
}

export function TimerForm({
	onSubmitHandler,
	workTime,
	breakTime,
	setBreakTime,
	setWorkTime
}: IProps) {
	return (
		<form onSubmit={onSubmitHandler}>
			<div>
				<label>Work (min)</label>
				<input
					value={workTime}
					onChange={e => {
						const numberFromInput = Number(e.target.value)
						if (numberFromInput === +e.target.value && numberFromInput <= 120)
							setWorkTime(numberFromInput)
					}}
				/>
			</div>
			<div>
				<label>Break (min)</label>
				<input
					value={breakTime}
					onChange={e => {
						const numberFromInput = Number(e.target.value)
						if (
							numberFromInput === +e.target.value &&
							numberFromInput >= 0 &&
							numberFromInput <= 120
						)
							setBreakTime(numberFromInput)
					}}
				/>
			</div>
			<button type='submit'>Set time</button>
		</form>
	)
}
