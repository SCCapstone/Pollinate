import React, { Component } from 'react';
import './style.css';

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

  //signup helper method
  signup() {
      const body = {email: this.state.email, password: this.state.password};
    fetch("http://localhost:8080/auth/signup", {method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
        .then(
            (result) => {
              console.log(result);
              if (result.status === 201)
                this.props.history.push("/login");
            },
            (error) => {
              this.setState({
                error
              });
            }
        )
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
          <h2>Join Pollinate</h2>
          <div className="form-group">
            <input
                className="form-control"
                type="email"
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
                  onClick={() => this.signup()}
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
