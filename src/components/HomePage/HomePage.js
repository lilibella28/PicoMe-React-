import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar.js';
import { MDBContainer } from 'mdb-react-ui-kit';
import Map from '../Map/Map.js';
function HomePage() {
	return (
		<div className="App">
			<NavBar />
      <MDBContainer>
      <Map />
      </MDBContainer>

			<Footer />
		</div>
	);
}

export default HomePage;