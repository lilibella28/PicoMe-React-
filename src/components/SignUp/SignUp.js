import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import Social from '../SignIn/SocialMSignIn/Social';
import '../../scss/SignUpStyle/SignUpStyle.scss'
function SignUp() {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleNameChange = (e) => setName(e.target.value);
	const handleLastnameChange = (e) => setLastname(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle SignUp submit
	};
	return (
		<form onSubmit={handleSubmit}>
			<Container>
				<Row>
					<Col>
						<Input
							type="text"
							name="name"
							label="First name"
							value={name}
							onChange={handleNameChange}
							required
							autoComplete="name"
						/>
					</Col>
					<Col>
						<Input
							type="text"
							name="lastname"
							label="Last name"
							value={lastname}
							onChange={handleLastnameChange}
							required
							autoComplete="lastname"
						/>
					</Col>

					<Input
						type="email"
						name="email"
						label="Email"
						value={email}
						onChange={handleEmailChange}

					/>

					<Input
						type="password"
						name="password"
						label="Password"
						value={password}
						onChange={handlePasswordChange}
						required
					/>
					<Button  className="signup-button" type="submit"> Sign Up</Button>
					<h6>or</h6>
					<Social />
				</Row>
			</Container>
			</form>
	);
}

export default SignUp;
