// import React, { PureComponent} from "react";
// import { withRouter } from 'react-router-dom';
// import { Card } from 'react-bootstrap'
// import TigerImage from '../assets/jaguar.webp'


// class PartOne extends PureComponent{
// 	constructor(props){
// 		super(props);
// 	}

// 	toDonatePage = () => {
// 	   const { history } = this.props;
// 	   if(history) history.push('/Donate');
// 	}

// 	render(){
// 		return(
		
// 			<div className="part-one">

// 				<div className="home-page-part-one" style={{ backgroundImage:`url(${TigerImage})`, height:"1000px", width:"1519px", backgroundRepeat:"no-repeat", opacity:"75%" }}> </div>
// 				<br/>
					
// 				<div class="col" id="home-page-amount-title">
// 					<h3 className="home-page-donation-title">Total Money Donated:</h3>
// 	 				<Card className="donation-home-page-card">
// 						<Card.Body>
						
// 					    <h4 className="donation-home-page-font">{this.props.amount}</h4>
// 					    </Card.Body>	    
// 					</Card>
// 					<br/>
// 					<button className="btn btn-success" type="button" onClick={this.toDonatePage}>Donate Now</button>
// 				</div>
// 				<h1 className="home-page-name">Marc's Big Cat <br/> Foundation</h1>
// 				<div className="home-page-description">
// 			 		<h5 className="our-message">Join us in trying to save some of our <br/> most beautiful creatures on earth from extinction. <br/> Scroll to hear our story and goals for this foundation</h5>		
// 				</div>	
				
// 			</div>
// 		);
// 	}
// }

// export default withRouter(PartOne)