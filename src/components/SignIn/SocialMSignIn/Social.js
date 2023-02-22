import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MDBIcon } from 'mdb-react-ui-kit';
import Button from '../../Common/Button/Button';
import '../../../scss/SocialStyle/SocialStyle.scss';
function Social() {
	return (
		<div className="MainSocial">
			<Container>
				<Row>
					<Button className="google-button my-button" type="button">
						<span>
							{' '}
							<MDBIcon fab icon="google" /> Continue with Google
						</span>
					</Button>

					<Button className="facebook-button my-button" type="button">
						<span>
							{' '}
							<MDBIcon fab icon="facebook" /> Continue with Facebook
						</span>
					</Button>
					<Button className="apple-button my-button" type="button">
						<span>
							<MDBIcon fab icon="apple" /> Continue with Apple
						</span>
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Social;
