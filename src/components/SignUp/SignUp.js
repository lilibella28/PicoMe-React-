import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import Social from '../SignIn/SocialMSignIn/Social';
function SignUp() {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e) => setEmail(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleNameChange = (e) => setName(e.target.value);
	const handleLastnameChange = (e) => setLastname(e.target.value);
	return (
		<div className="App">
			<Container>
				<Row>
					<Col>
						<Input
							type="text"
							name="name"
							label="First name"
							value={name}
							onChange={handleNameChange}
							placeholder="Enter your first name"
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
							placeholder="Enter your last name"
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
						placeholder="Enter your email address"
					/>

					<Input
						type="password"
						name="password"
						label="Password"
						value={password}
						onChange={handlePasswordChange}
						placeholder="Enter your password"
						required
					/>
					<Button type="submit"> Sign Up</Button>
					<h6>or</h6>
					<Social />
				</Row>
			</Container>
		</div>
	);
}

export default SignUp;
