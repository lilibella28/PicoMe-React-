import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MDBIcon } from 'mdb-react-ui-kit';
import Button from '../../Common/Button/Button';
function Social() {
	return (
		<div className="relative left-2.5 right-6">
			<Container>
				<Row>
					<Button className="bg-google-bg flex justify-center max-w-full min-w-min rounded-full border-none text-white items-center text-center m-0 p-0 mt-2 font-semibold" type="button">
						<span>
							{' '}
							<MDBIcon fab icon="google" /> Continue with Google
						</span>
					</Button>

					<Button className="bg-facebook-bg flex justify-center max-w-full min-w-min rounded-full border-none text-white items-center text-center m-0 p-0 mt-2 font-semibold" type="button">
						<span>
							{' '}
							<MDBIcon fab icon="facebook" /> Continue with Facebook
						</span>
					</Button>
					<Button className="bg-black mb-5 flex justify-center max-w-full min-w-min rounded-full border-none text-white items-center text-center m-0 p-0 mt-2 font-semibold" type="button">
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
