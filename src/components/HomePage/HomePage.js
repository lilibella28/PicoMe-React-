import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsersCards from './UsersCards/UsersCards.js';
import Map from '../Map/Map';
function HomePage() {
	return (
		<div>
			<Container fluid>
				
						<UsersCards />
				
			</Container>
		</div>
	);
}

export default HomePage;
