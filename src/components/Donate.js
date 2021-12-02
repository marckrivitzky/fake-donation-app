import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import { Form, Card, Row, Col, InputGroup} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";


class Donate extends PureComponent{
	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			Address: '',
			City: '',
			State: '',
			cardNumber: null,
			Exp: '',
			Evc: null,
			donationAmount: null,

		}

	}

	handleInputChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
   	}

    handleSubmitFirstName = () => {
        this.props.onSubmitOne(this.state.firstName);
    }
    
	handleInputChangeLastName = (e) => {
        this.setState({lastName: e.target.value});
   	}

    handleSubmitLastName = () => {
        this.props.onSubmitTwo(this.state.lastName);
    }
    
	handleInputChangeDonationAmount = (e) => {
        this.setState({donationAmount: e.target.value  });
   	}

    handleSubmitDonationAmount = () => {
        this.props.onSubmitThree( this.state.donationAmount);
    }
    

	toHomePage = () => {
	   const { history } = this.props;
	   if(history) history.push('/');
	}

	clearInput = () => {
		this.setState({
			firstName: '',
			lastName: '',
			Address: '',
			City: '',
			State: '',
			cardNumber: null,
			Exp: '',
			Evc: null,
			donationAmount: '',
		})
	}


	render(){
		const space = "  "

		return(
			<div className="donate-container">
				<div classeName="form-card-container">
					<NavBar/>
					
					<Row className="form-card-contain">
						<Col>
							
							<Card className="form-card" style={{ width: '40rem',backgroundColor: "#212529", color:"white", border:"10px solid rgb(194, 134, 22)" }}> 
								<br/><h3>Donate</h3>
								 <Card.Body>
									<Form>
									  <Row className="mb-3">
									    <Form.Group as={Col} controlId="formGridEmail">
									      <Form.Label>First Name</Form.Label>
										  <Form.Control type="first-name" value={ this.state.firstName } onChange={ this.handleInputChangeFirstName } />
									    </Form.Group>

									    <Form.Group as={Col} controlId="formGridPassword">
									      <Form.Label>Last Name</Form.Label>
										  <Form.Control type="last-name" value={ this.state.lastName } onChange={ this.handleInputChangeLastName } />
									    </Form.Group>
									  </Row>

									  <Form.Group className="mb-3" controlId="formGridAddress1">
									    <Form.Label>Card Number</Form.Label>
									    <Form.Control placeholder="123-1234-1234" />
									  </Form.Group>

									  <Row className="mb-3">
									    <Form.Group as={Col} controlId="formGridCity">
									      <Form.Label>City</Form.Label>
									      <Form.Control />
									    </Form.Group>

									    <Form.Group as={Col} controlId="formGridState">
									      <Form.Label>State</Form.Label>
									      <Form.Select defaultValue="Choose...">
									        <option value="">State</option>
			    							<option value="AK">Alaska</option>
			    							<option value="AL">Alabama</option>
			    							<option value="AR">Arkansas</option>
			    							<option value="AZ">Arizona</option>
			    							<option value="CA">California</option>
			    							<option value="CO">Colorado</option>
			    							<option value="CT">Connecticut</option>
			    							<option value="DC">District of Columbia</option>
			    							<option value="DE">Delaware</option>
			    							<option value="FL">Florida</option>
			    							<option value="GA">Georgia</option>
			    							<option value="HI">Hawaii</option>
			    							<option value="IA">Iowa</option>
			    							<option value="ID">Idaho</option>
			    							<option value="IL">Illinois</option>
			    							<option value="IN">Indiana</option>
			    							<option value="KS">Kansas</option>
			    							<option value="KY">Kentucky</option>
			    							<option value="LA">Louisiana</option>
			    							<option value="MA">Massachusetts</option>
			    							<option value="MD">Maryland</option>
			    							<option value="ME">Maine</option>
			    							<option value="MI">Michigan</option>
			    							<option value="MN">Minnesota</option>
			    							<option value="MO">Missouri</option>
			    							<option value="MS">Mississippi</option>
			    							<option value="MT">Montana</option>
			    							<option value="NC">North Carolina</option>
			    							<option value="ND">North Dakota</option>
			    							<option value="NE">Nebraska</option>
			    							<option value="NH">New Hampshire</option>
			    							<option value="NJ">New Jersey</option>
			    							<option value="NM">New Mexico</option>
			    							<option value="NV">Nevada</option>
			    							<option value="NY">New York</option>
			    							<option value="OH">Ohio</option>
			    							<option value="OK">Oklahoma</option>
			    							<option value="OR">Oregon</option>
			    							<option value="PA">Pennsylvania</option>
			    							<option value="PR">Puerto Rico</option>
			    							<option value="RI">Rhode Island</option>
			    							<option value="SC">South Carolina</option>
			    							<option value="SD">South Dakota</option>
			    							<option value="TN">Tennessee</option>
			    							<option value="TX">Texas</option>
			    							<option value="UT">Utah</option>
			    							<option value="VA">Virginia</option>
			    							<option value="VT">Vermont</option>
			    							<option value="WA">Washington</option>
			    							<option value="WI">Wisconsin</option>
			    							<option value="WV">West Virginia</option>
			    							<option value="WY">Wyoming</option>
									      </Form.Select>
									    </Form.Group>

									    <Form.Group as={Col} controlId="formGridZip">
									      <Form.Label>Zip</Form.Label>
									      <Form.Control />
									    </Form.Group>
									  </Row>


										<Form.Group as={Col} controlId="formGridZip">
										<Form.Label>Donation amount</Form.Label>
										<InputGroup className="mb-3">
										    <InputGroup.Text>$</InputGroup.Text>
										  	  <Form.Control type="number" value={ this.state.donationAmount } onChange={ this.handleInputChangeDonationAmount }  />
										    <InputGroup.Text>.00</InputGroup.Text>
										  </InputGroup>
 
									  	</Form.Group>
										
										 <button className="btn btn-success" type="button" onClick={() => {this.handleSubmitFirstName(); this.handleSubmitLastName(); this.handleSubmitDonationAmount(); this.clearInput(); }} >Donate</button>{space}
									     <button className="btn btn-warning" type="button" onClick={(event) => { this.toHomePage(event);}} >Home Page</button>
										
									</Form>
										
								</Card.Body>
							
							</Card>
						</Col>
					</Row>
				
					



				</div>
				<BottomPage />
		 	</div>	
		);
	}
}

export default withRouter(Donate)



											




