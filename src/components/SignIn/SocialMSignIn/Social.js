import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../Common/Button/Button'
function Social() {
	return (
		<div>
			
			<Container>
      <Row>
        
		 <Button type='button'> Continue  with Google</Button>
         <Button type='button'> Continue  with Facebook</Button>
         <Button type='button'> Continue  with Apple</Button>
		
      </Row>
    </Container>
			
		</div>
	);
}

export default Social;