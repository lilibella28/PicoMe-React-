import React, { useState } from 'react';
import SignIn from '../SigInMain/SigInMain';
import EmailForm from '../../SignUp/SignUp';
import Container from 'react-bootstrap/Container';
import '../../../scss/ToggleStyle/ToggleStyle.scss'
import Switch from 'react-switch'

function ToggleButton() {
	const [showLogin, setShowLogin] = useState(true);
	const handleSwitch = () => {
		setShowLogin(!showLogin);
	};

	return (
		<Container  className="MainContainer">
			<h6>Sign in or Sign Up</h6>
			<div className="auth-toggle">
				<span>Sign in</span>
				<Switch
					onChange={handleSwitch}
					checked={!showLogin}
					uncheckedIcon={false}
					checkedIcon={false}
					offColor="#3BCEAC"
					onColor="#OEAD69"
					width={56}
					
				/>
				<span>Sign Up</span>
			</div>
			{showLogin ? <SignIn /> : <EmailForm />}
		</Container>
	);
}

export default ToggleButton;
