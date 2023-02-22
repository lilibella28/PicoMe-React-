import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from '../Map/Map'
function HomePage() {
	return (
		<div className="App">
			
			<Container fluid>
      <Row>
		  <Map/>
        <Col>
		<h1>Hello</h1>
		 </Col>
		 
		
      </Row>
    </Container>
			
		</div>
	);
}

export default HomePage;