import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../store/store'

const RegistrationForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')

	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()

	const handleRegister = () => {
		if (!username || !password || !confirmPassword) {
			setMessage('Заполните все поля!!!')
			return
		}

		if (password !== confirmPassword) {
			setMessage('Пароли не совпадают.')
			return
		}

		const userExists = users.some((user) => user.username === username)
		if (userExists) {
			setMessage('Такой пользователь уже существует.')
			return
		}

		dispatch(registerUser({ username, password }))
		setMessage('Регистрация прошла успешно!')
	}

	return (
		<div>
			<h2>Регистрация</h2>
			<div>
				<label>
					Имя пользователя:
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Пароль:
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
			</div>
			<div>
				<label>
					Подтвердите пароль:
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</label>
			</div>
			<button onClick={handleRegister}>Зарегистрироваться</button>
			{message && <p>{message}</p>}
		</div>
	)
}

export default RegistrationForm
