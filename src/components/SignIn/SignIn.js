import React, { useState } from 'react';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button'
import Social from './SocialMSignIn/Social'
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
     
		<form onSubmit={handleSubmit}>
			<Input
				type="email"
				name="email"
				label="Email"
				value={email}
				onChange={handleEmailChange}
				placeholder="Enter your email address"
				required
				autoComplete="email"
			/>
            
			<Input
				type="password"
				name="password"
				label="Password"
				value={password}
				onChange={handlePasswordChange}
				placeholder="Enter your password"
				required
				autoComplete="current-password"
			/>

		<Button type='submit'> Sign In</Button>
		</form>
	);
};

export default SignInForm;
