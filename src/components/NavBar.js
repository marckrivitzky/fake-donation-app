import React from "react";
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import {GiTigerHead} from 'react-icons/gi'

function NavBar(){
	const tigerLogo = <GiTigerHead size={50} color={'orange'} />
	return(
	<div className="Navbar-containers">
		{/* <Navbar style={{position: 'sticky', marginRight:'auto', marginLeft: 'auto',  height: 'fit-content', padding: '10px'}} className='Navbar' color="white" bg="dark" variant="dark"> */}

			<Navbar  className="fixed-top" bg="secondary">
			    <Nav>
					{tigerLogo}
			      <Nav.Link href="/">Home </Nav.Link>
			      <Nav.Link href="/TheTeam">Team </Nav.Link>
				  <Nav.Link href="Donate">Donate </Nav.Link>
				  <Nav.Link a href="https://www.youtube.com/watch?v=UiFjONQDHNM">Learn more </Nav.Link>	
					
		   		</Nav>
		   
  		</Navbar>
	</div>
	);
}

export default NavBar;