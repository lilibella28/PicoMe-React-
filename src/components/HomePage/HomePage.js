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
				<Map  />
				  <h4 className="mt-10 text-green-600">Nourish communities, unite against hunger - Picome</h4>
						<UsersCards />
				
			</Container>
		</div>
	);
}

export default HomePage;
