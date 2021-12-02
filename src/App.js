

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import TheTeam from './components/TheTeam';
import Donate from './components/Donate'

export default class App extends React.Component {
 constructor(props){
    super(props);
		  this.state = {
			  firstName: '',
        lastName: '',
        donationAmount: null,   
		}
	}

  updateData1 = (fName) => {
		this.setState({ 
       firstName: fName,
      
     });
	}

  updateData2 = (lName) => {
		this.setState({ 
        lastName: lName,
     });
	}
  updateData3 = (amount) => {
		this.setState({ 
        donationAmount: amount
     });
	}

  render(){
    return (
      <div className="App">

        <Router>
          <Switch>

            <Route path="/" exact>
              <HomePage firstName={this.state.firstName} lastName={this.state.lastName} amount={this.state.donationAmount}/>
            </Route>


            <Route path="/Donate" exact>
              <Donate onSubmitOne={ this.updateData1 } onSubmitTwo={ this.updateData2 } onSubmitThree={ this.updateData3 }  />
            </Route>

            <Route path="/TheTeam" exact>
              <TheTeam />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}
