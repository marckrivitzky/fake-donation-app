// import React, { PureComponent} from "react";
// import { withRouter } from 'react-router-dom';
// import LionImage from '../assets/lion.jpg'

// class PartTwo extends PureComponent{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){



// 		return(
// 				<div className="part-two-container">
// 					<div className="home-page-part-two" style={{ backgroundImage:`url(${LionImage})`, height:"665px", width:"748px", backgroundRepeat:"no-repeat", opacity:"75%" }}> </div>
// 					<h2 className="part-two-title">Our Goal</h2>
// 					<h5 className="part-two-description">
// 						Here at Marc's Big Cat Foundation, we strive to solidify 
// 						the survival of all the big cats around the world.  
// 						Our goal is to raise 10 million dollars.  Climate change,
// 						poaching, and deforestation are all fast tracking the extinction 
// 						of our worlds beloved creatures.  Our foundation will use the Money						
// 						that you donate to directly help stop these incredibly painful and sad events.
// 						Our team is working around the clock to insure every cent we collect goes directly to 
// 						our animal friends.  When we picture the earth ten years from now, we see all big cats 
// 						prospering as they should, they just need our help.
//  					</h5>
// 				</div>
// 		);
// 	}
// }

// export default withRouter(PartTwo)

import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import LionImage from '../assets/lion.jpg'

class PartTwo extends PureComponent{
	constructor(props){
		super(props);
	}

	render(){



		return(

			<div className="home-page" style={{ opacity:"100%" }} >
			
				<div className="part-two-container">
					<br />
					<div className="part-two-card">
					<h2 className="part-two-title">Our Goal</h2>
						<br />
						<h5 className="part-two-description">
						Here at Marc's Big Cat Foundation, we strive to solidify 
						the survival of all the big cats around the world.  
						Our goal is to raise 10 million dollars.  Climate change,
						poaching, and deforestation are all fast tracking the extinction 
						of our worlds beloved creatures.  Our foundation will use the Money						
						that you donate to directly help stop these incredibly painful and sad events.
						Our team is working around the clock to insure every cent we collect goes directly to 
						our animal friends.  When we picture the earth ten years from now, we see all big cats 
						prospering as they should, they just need our help.
 						</h5>
					</div>
					</div>		
			</div>
		);
	}
}

export default withRouter(PartTwo)




			