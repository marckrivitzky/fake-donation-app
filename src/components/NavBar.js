import React from "react";
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import {GiTigerHead} from 'react-icons/gi'

function NavBar(){
	const tigerLogo = <GiTigerHead size={150} color={'orange'} />
	return(
	<div className="Navbar-container">
		<Navbar className='Navbar' color="white" bg="dark" variant="dark">
		    <Container>
				<div className="tiger-logo">{tigerLogo}</div>
			    <Nav className="me-auto">
			      <Nav.Link href="/">Home </Nav.Link>
			      <Nav.Link href="/TheTeam">Team </Nav.Link>
				  <Nav.Link href="Donate">Donate </Nav.Link>
				  <Nav.Link a href="https://www.youtube.com/watch?v=UiFjONQDHNM">Learn more </Nav.Link>	
					<Nav.Link a href="https://main.d3fc7rx6qh93ph.amplifyapp.com/CodingProjects">Back to website </Nav.Link>	
		   		</Nav>
		    </Container>
  		</Navbar>
	</div>
	);
}

export default NavBar;