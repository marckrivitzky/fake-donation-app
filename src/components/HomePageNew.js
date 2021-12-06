
import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import { Card, Modal } from 'react-bootstrap'
import TigerImage from '../assets/jaguar2.png'
import certificate from '../assets/certificate.jpg'
import BottomPage from "./BottomPage";
import PartTwo from "./PartTwo";


class HomePageNew extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				modalOpen: false,

			}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	openModal = () => {
		this.setState ({
			modalOpen: true
		})
	}

	closeModal = () => {
		this.setState ({
			modalOpen: false
		})
	}


	toDonatePage = () => {
	   const { history } = this.props;
	   if(history) history.push('/Donate');
	}

	render(){
		return(
		
			<div className="home-page" style={{ opacity:"100%" }} >
				<NavBar />
				<div className="part-one-container">
					<br /><br /><br />
					<h1 className="home-page-name">Marc's Big Cat <br/> Foundation</h1>
						<br />
						<h5 className="our-message">Join us in trying to save some of our <br/> most beautiful creatures on earth <br/> from extinction. Scroll to hear how we <br/> got started and our goals as a foundation. <br/>  You can also check out our team by clicking <br/> on the link in the navigation bar</h5>		
						<br /><br/>
						<button className="btn btn-success" id="home-page-donate-button" type="button" onClick={this.toDonatePage}>Donate Now</button>
						<br/><br/>
					
							<div className="modal-container">
 								<button className="btn btn-secondary" id="open-modal-button" onClick={this.openModal}>Click here if you donated</button>
 									<div className="modal">
 							   		 <Modal  id="modal-page" show={this.state.modalOpen} onHide={this.closeModal}> 									
	 									<h4 className="donation-home-page-font-thanks">Thank you {this.props.firstName} {this.props.lastName} </h4>
	 									<h5 className="donation-home-page-font-text">Your generous donation of ${this.props.amount}.00 will be greatly appreciated by our animal friends. From our team to yours, we hope you have an amazing day! </h5>
	 									<img src={certificate} width="236px" height="182px" className="cert-image"/>
	 									<br/><br/>
	 									<button className="btn btn-success" id="exit">Print certificate</button>
	 									<br/>
	 									<button className="btn btn-danger" id="exit" onClick={this.closeModal}>Close</button>
	 									<br/>
 		 							 </Modal>
 								</div>
 					   		</div>
							<br/><br/><br/>
						<h4 className="quote-image">"There may be days where I can't help an animal in need, but the day will never come that I wont try." <br/> - Paul Oxton</h4>
				</div>
				<PartTwo />	
					<br/>
				<BottomPage />
			</div>
		);
	}
}

export default withRouter(HomePageNew)