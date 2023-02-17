import React, { useState } from 'react';
import SignIn from '../SigInMain/SigInMain';
import EmailForm from '../../SignUp/SignUp';
import Button from '../../Common/Button/Button'
function ToggleButton() {
	const [isOn, setIsOn] = useState(false);

	const handleClick = () => {
		setIsOn(!isOn);
	};

	return (
		<div>
          <h6>Sign in or Sign Up</h6>
			<Button onClick={handleClick}>{isOn ? 'Sign Up' : 'Sign In'}</Button>
			{isOn ? <EmailForm /> : <SignIn/>}
		</div>
	);
}

export default ToggleButton;
