import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppRoute from '../Routes/AppRoutes';
import logo from '../../assests/Image/mainLogo.png';

function NavBars() {
	return (
		<Router>
			<Navbar bg="light" expand="md">
				<Navbar.Brand as={Link} to="/">
					<img src={logo} width="120" height="100" className="d-inline-block align-top" alt="Brand logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<div className="mr-auto">
						<Nav className="mr-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/about">
								About Us
							</Nav.Link>
							<Nav.Link as={Link} to="/signin">
								Sign In
							</Nav.Link>
							<Nav.Link as={Link} to="/find">
								Find Food
							</Nav.Link>
							<Nav.Link as={Link} to="/offer">
								Offer Food
							</Nav.Link>
							<Nav.Link as={Link} to="/contact">
								Contact Us
							</Nav.Link>
						</Nav>
					</div>
				</Navbar.Collapse>
			</Navbar>
			<AppRoute />
		</Router>
	);
}

export default NavBars;
