import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import {Card, Col, Row} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import marc from '../assets/marc.jpg'
import jackBlack from '../assets/jackBlack.jpg'
import tomHanks2 from '../assets/TomHanks2.png'

class Team extends PureComponent{
	constructor(props){
		super(props);
	}	


	render(){

		return(
			<div className="home-page-containters">
			
				<br /><br/><br/>
				<h2 className="team-title">Meet our team</h2>
				<div className="team-carding">
					<Row style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto',   }}>
						<Col style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto',  paddingBottom: '10px'}}>
							<Card style={{border: '10px solid rgb(194, 134, 22)', backgroundColor: 'black',  borderRadius: '10% 10% 10% 10% /10% 10% 10% 10% ', padding: '8px'}}>
								<Card.Title style={{color: 'white'}}>Marc Krivitzky</Card.Title>
								<Card.Img src={marc} style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto', borderRadius: '10% 10% 10% 10% /10% 10% 10% 10% '} }/>
								<br/>
								<Card.Text style={{color: 'white'}}>
									Marc Krivitzky is the founder and creator of this fake foundation for big cats.  This is a practice website in order to gain more skills and understanding for web design and coding.
								</Card.Text>
								<br/>
							</Card>
						</Col>
						<Col style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto', paddingBottom: '10px'}}>
							<Card style={{border: '10px solid rgb(194, 134, 22)', backgroundColor: 'black',  borderRadius: '10% 10% 10% 10% /10% 10% 10% 10% ', padding: '8px'}}>
								<Card.Title style={{color: 'white'}}>Tom Hanks</Card.Title>
								<Card.Img src={tomHanks2} style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto', borderRadius: '10% 10% 10% 10% /10% 10% 10% 10% '} }/>
								<br/>
								<Card.Text style={{color: 'white'}}>
									Tom Hanks unfortunately had nothing to do with this project.  Although I do believe he would be interested in donating if this was a real foundation!
								</Card.Text>
								<br/>
							</Card>
						</Col>
						<Col style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto',  paddingBottom: '10px'}}>
							<Card style={{border: '10px solid rgb(194, 134, 22)', backgroundColor: 'black', borderRadius: '10% 10% 10% 10% /10% 10% 10% 10% ', padding: '8px'}}>
								<Card.Title style={{color: 'white'}}>Jack Black</Card.Title>
								<Card.Img src={jackBlack} style={{width:'70%', position:'relative', marginRight:'auto', marginLeft:'auto', borderRadius: '10% 10% 10% 10% /10% 10% 10% 10% '} }/>
								<br/>
								<Card.Text style={{color: 'white'}}>
									Jack Black also had nothing to do with this project.  But one would assume he too would be interested in donating if this was a real foundation!
								</Card.Text>
								<br/>
							</Card>
						</Col>
						
					</Row>

				
			</div>
			<br/> 
			
		</div>
			
			
		);
	}
}

export default withRouter(Team)