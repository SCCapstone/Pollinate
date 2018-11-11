import React, { Component } from 'react';
import './style.css';
//Placeholder importing using firebase
// import { firebaseApp } from '../firebase';

class Signup extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

  //signUp helper method
  signUp() {
        console.log('this.state', this.state);
        //Placeholder firebase utilization
        /*const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error);
                this.setState({error})
            })*/
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
          <h2>Join Pollinate</h2>
          <div className="form-group">
            <input
                className="form-control"
                type="text"
                style={{marginRight: '5px'}}
                placeholder="email"
                onChange={event => this.setState({email: event.target.value})}
                />
              <input
                  className="form-control"
                  type="password"
                  style={{marginRight: '5px'}}
                  placeholder="password"
                  onChange={event => this.setState({password: event.target.value})}
                  />
              <button
                  className="btn btn-primary"
                  type="button"
                  //Attach helper method to click of button
                  onClick={() => this.signUp()}
                  >
                  Sign Up
              </button>
          </div>
          <div>{this.state.error.message}</div>
      </div>
    )
  }
}

export default Signup;
