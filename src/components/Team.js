import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
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
			<div className="home-page-containter">
			
				<br />
				<h2 className="team-title">Meet our team</h2>
				<div className="team-cards">
				
					<br />
					<div class="row">

						<div class="col">
							<div className="the-team">
								<h4 class="team-members">Marc Krivitzky</h4>
								<br />
								<img src={marc} width="187px" height="263.5px" className="project-images"/>
								
								<br /><br/>
								<p className="team-description">
									Marc Krivitzky is the founder and creator of this fake foundation for big cats.  This is a practice website in order to gain more skills and understanding for web design and coding.
								</p>
							</div>
					    </div>

						<div class="col">
							<div className="the-team">
								<h4 class="team-members">Tom Hanks</h4>
								<br />
								<img src={tomHanks2} width="187px" height="263.5px" className="project-images"/>
								
								<br /><br/>
								<p className="team-description">
									Tom Hanks unfortunately had nothing to do with this project.  Although I do believe he would be interested in donating if this was a real foundation!
								</p>
							</div>
					    </div>
						
						<div class="col">
							<div className="the-team">
								<h4 class="team-members">Jack Black</h4>
								<br />
								<img src={jackBlack} width="187px" height="263.5px" className="project-images"/>
								
								<br /><br/>
								<p className="team-description">
									Jack Black also had nothing to do with this project.  But one would assume he too would be interested in donating if this was a real foundation!
								</p>
							</div>
					    </div>
					
				</div>
			</div>
			<br/>
			
		</div>
			
			
		);
	}
}

export default withRouter(Team)