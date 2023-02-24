import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function Footer() {
	return (
		<MDBFooter className="bg-light text-center text-white">
			<MDBContainer style={{marginTop:'100px'}} className="p-4 pb-0">
				<section className="mb-4">
					<MDBBtn floating className="m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
						<MDBIcon fab icon="mail-bulk" />
					</MDBBtn>

					<MDBBtn floating className="m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
						<MDBIcon fab icon="google" />
					</MDBBtn>

					<MDBBtn floating className="m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
						<MDBIcon fab icon="linkedin-in" />
					</MDBBtn>

					<MDBBtn floating className="m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
						<MDBIcon fab icon="github" />
					</MDBBtn>
				</section>
			</MDBContainer>

			<div className="text-center p-3" style={{ backgroundColor: '#F9A825' }}>
				<h6> © 2022 Copyright PicoMe</h6>
			</div>
		</MDBFooter>
	);
}

export default Footer;
