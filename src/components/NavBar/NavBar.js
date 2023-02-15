import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

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
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About Us</Nav.Link>
						<Nav.Link href="/signin">Sign In</Nav.Link>
						<Nav.Link href="/find">Find Food</Nav.Link>
						<Nav.Link href="/offer">Offer Food</Nav.Link>
						<Nav.Link href="#">Contact Us</Nav.Link>
					</Nav>
				</div>
				
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBars;
