import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignIn from '../SignIn'
import Social from '../SocialMSignIn/Social'
function SigInMain() {
	return (
		<div>
			
			<Container >
      <Row>
        <Col>
        <Social/>
        <h6> or continue with email</h6>
		<SignIn/>
		 </Col>
		 
		
      </Row>
    </Container>
			
		</div>
	);
}

export default SigInMain