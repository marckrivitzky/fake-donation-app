
import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import { Card, CardImg, Modal, Row, Button } from 'react-bootstrap'
import TigerImage from '../assets/jaguar2.png'
import certificate from '../assets/certificate.jpg'
import BottomPage from "./BottomPage";
import PartTwo from "./PartTwo";
import LionImage from '../assets/lion.jpg'

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
		
			<div className="home-page">
				<NavBar />
			
					<br/><br/>
					<Row>	
						<Card style={{width: '100%', border: 'none', backgroundImage: `url(${TigerImage})`, }}>
							<br/>
							<Card.Title style={{fontFamily: 'cursive', fontSize:'55px', color: 'rgb(194, 134, 22)'}}>Marc's Big Cat Foundation</Card.Title>
								<br/><br/>
								<Card.Text style={{position: 'relative', marginRight: 'auto', marginLeft: 'auto', width: 'fit-content', border: '10px solid rgb(194, 134, 22)', borderRadius: '10% 10% 10% 10% / 10% 10% 10% 10% ', color: 'white', padding: '10px'}}>
									Join us in trying to save some of our <br/>
									most beautiful creatures on earth <br/>
									from extinction. Scroll to hear how we <br/>
									got started and our goals as a foundation.<br/> 
									You can also check out our team by clicking <br/>
									 on the link in the navigation bar
								</Card.Text>
								<br/><br/>
								<Card.Body style={{position:'relative', marginLeft: 'auto', marginRight:'auto'}}>
									<button className="btn btn-success"  type="button" onClick={this.toDonatePage}>Donate Now</button>
										<br/><br/>
				 							<button className="btn btn-secondary" onClick={this.openModal}>Click here if you donated</button>
				 							
		 							    <Modal  style={{ position: 'relative', marginRight: 'auto', marginLeft: 'auto', bottom:'30%'}} show={this.state.modalOpen} onHide={this.closeModal}>
											<Card style={{width: '100%', position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>
												<Card.Title style={{width: '100%', position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>Thank you {this.props.firstName} {this.props.lastName}</Card.Title>
												<br/>
												<Card.Text style={{width: '100%', position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>Your generous donation of ${this.props.amount}.00 will be greatly appreciated by our animal friends. From our team to yours, we hope you have an amazing day!</Card.Text>
												<img src={certificate} />
			 									<br/><br/>
												<button className="btn btn-success" >Print certificate</button>
			 									<br/>
		 										<button className="btn btn-danger" onClick={this.closeModal}>Close</button>
			 									<br/>
											</Card>
										 </Modal>




		 		 						
		 							
								</Card.Body>
								<br/><br/>
								<Card.Text style={{position: 'relative', marginRight: 'auto', marginLeft: 'auto', width: 'fit-content', color: 'white', padding: '10px', fontFamily: 'cursive', fontSize: 'larger'}}>
									"There may be days where I <br/>
									can't help an animal in need, <br/>
									but the day will never come <br/>
									that I wont try." <br/> - Paul Oxton
								</Card.Text>
								
								<br/>
						</Card>
					</Row>

					<Row>
						<Card style={{width: '100%', border: 'none', backgroundImage: `url(${LionImage})`, backgroundRepeat:'no-repeat', backgroundColor:'black'}}>
							<br/><br/>
							<Card.Title style={{fontSize:'50px', color: 'rgb(194, 134, 22)', fontFamily: 'cursive'}}>Our Goal</Card.Title>
								<br/><br/>
								<Card.Text style={{opacity:'70%', backgroundColor: 'black', position: 'relative', marginRight: 'auto', marginLeft: 'auto', width: 'fit-content', border: '10px solid rgb(194, 134, 22)', borderRadius: '10% 10% 10% 10% / 10% 10% 10% 10% ', color: 'white', padding: '10px'}}>
								
								Here at Marc's Big Cat Foundation, we strive <br/>
					to solidify the survival of all the big cats around the world.  Our goal is to raise <br/> 10 million dollars.  Climate change,
								poaching, <br/> and deforestation are all fast tracking the <br/> extinction 
								of our worlds beloved creatures.  Our foundation will use the Money	<br/>					
								that you donate to directly help stop these incredibly painful and sad events.<br/>
								Our team is working around the clock to insure every cent we collect goes directly to <br/>
								our animal friends.  When we picture the earth ten years from now, we see all big cats <br/>
								prospering as they should, they just need our help.

							</Card.Text>
							<br/><br/>
						</Card>
						
					</Row>
			
				<BottomPage />
				
			</div>
		);
	}
}

export default withRouter(HomePageNew)
