import React, { useState } from 'react';
import SignIn from '../SigInMain/SigInMain';
import EmailForm from '../../SignUp/SignUp';
import Container from 'react-bootstrap/Container';
import Button from '../../Common/Button/Button'
function ToggleButton() {
	const [isOn, setIsOn] = useState(false);

	const handleClick = () => {
		setIsOn(!isOn);
	};

	return (
		<Container>
		<div>
          <h6>Sign in or Sign Up</h6>
			<Button onClick={handleClick}>{isOn ? 'Sign Up' : 'Sign In'}</Button>
			{isOn ? <EmailForm /> : <SignIn/>}
		</div>
		</Container>
	);
}

export default ToggleButton;
