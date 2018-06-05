import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }


  render() {
    return (
      <div> 
     
          <div className="jumbotron" style={{'textAlign': 'center','margin-top': '66px','background-color':'#f4f1de'}}>
            {/* <img src="car.png" height="96"  alt="avinashbhosale.com"></img> */}
            <h2>What is your favorite front-end framework in 2018 ? </h2>
            <h4> Click on the logo below to vote!</h4>
            <br />

            <div className="row">

                  <div className="col-lg-offset-3 col-lg-4">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>

              <div className="col-lg-4">
              <img src="react_logo.png" height="96" alt="Angular" onClick={this.handleVoteReact}></img>
            </div>

            <div className="col-lg-4">
              <img src="vuejs_logo.png" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
            </div>
              

          </div>
      </div>
      </div>

    );
  }
}

export default App;
