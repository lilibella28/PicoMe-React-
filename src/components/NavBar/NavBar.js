import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assests/Image/mainLogo.png';

function NavBars() {
	return (
		<Navbar bg="light" expand="md">
			<Navbar.Brand href="#">
				<img src={logo} width="120" height="100" className="d-inline-block align-top" alt="Brand logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<div className="mr-auto">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About Us</Nav.Link>
						<Nav.Link href="#">Sign In</Nav.Link>
						<Nav.Link href="#">Find Food</Nav.Link>
						<Nav.Link href="#">Offer Food</Nav.Link>
						<Nav.Link href="#">Contact Us</Nav.Link>
					</Nav>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBars;
