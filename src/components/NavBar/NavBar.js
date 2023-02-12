import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">PicoMe</Navbar.Brand>
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#link">About Us</Nav.Link>
				<Nav.Link href="#home">Find Food</Nav.Link>
				<Nav.Link href="#link">Offer Food</Nav.Link>
			
				
			</Container>
		</Navbar>
	);
}

export default BasicExample;
