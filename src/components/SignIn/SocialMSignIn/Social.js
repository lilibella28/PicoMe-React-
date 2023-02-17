import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MDBIcon } from 'mdb-react-ui-kit';
import Button from '../../Common/Button/Button';
import '../../../scss/SocialStyle/SocialStyle.scss'
function Social() {
	return (
		<div>
			<Container>
				<Row>
					<Button  className ="google-button my-button" type="button">
						{' '}
						<MDBIcon fab icon="google" /> Continue with Google
					</Button>
					<Button  className="facebook-button my-button" type="button">
						{' '}
						<MDBIcon fab icon="facebook" /> Continue with Facebook
					</Button>
					<Button className="apple-button my-button" type="button">
						{' '}
						<MDBIcon fab icon="apple" /> Continue with Apple
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Social;
