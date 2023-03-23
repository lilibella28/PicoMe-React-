import React, { useState } from 'react';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button'
import '../../scss/SignInButtonStyle/SignInButtonStyle.scss'


const SignInForm= () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login submit
	};

	return (
     
		<form   onSubmit={handleSubmit}>
			<Input
				type="email"
				name="email"
				label="Email"
				value={email}
				onChange={handleEmailChange}
				placeholder="Required"
				required
			
			
			/>
            
			<Input
				type="password"
				name="password"
				label="Password"
				value={password}
				onChange={handlePasswordChange}
				placeholder="Required"
				required
				autoComplete="off"
			
			/>

		<Button  className="sign-button" type='submit'> Sign In</Button>
		</form>
	);
};

export default SignInForm;
