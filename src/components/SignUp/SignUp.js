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
						placeholder="Required"
						required
						autoComplete="off"

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
					<Button  className="flex justify-center w-8 min-w-full text-white items-center text-center m-0 p-0 font-semibold mt-2 bg-orange-400 rounded-full  h-8 min-h-full" type="submit"> Sign Up</Button>
					<h6>or</h6>
					<Social />
				</Row>
			</Container>
			</form>
	);
}

export default SignUp;
