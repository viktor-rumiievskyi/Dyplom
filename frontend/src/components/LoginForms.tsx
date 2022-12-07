import React, { FC, useState } from 'react'

const  LoginForms: FC = () =>  {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

		return (
			<div>
				<input 
				onChange={e => setEmail(e.target.value)}
				type='text'
				placeholder='Email'
				/>
				<input 
				onChange={e => setPassword(e.target.value)}
				type='Password'
				placeholder='Password'
				/>
				<button>Login</button>
				<button>Regis</button>
			</div>
		)

}

export default LoginForms