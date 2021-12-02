import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";
import marc from '../assets/marc.jpg'
import Team from "./Team";

class TheTeam extends PureComponent{
	constructor(props){
		super(props);
	}	


	render(){

		return(
			<div className="team-container">
				<NavBar />
				<Team />
				<BottomPage />
		 	</div>	
		);
	}
}

export default withRouter(TheTeam)