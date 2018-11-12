import React, { Component } from 'react';
import './style.css';
//Placeholder importing using firebase
// import { firebaseApp } from '../firebase';

class Login extends Component {
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

    //LogIn helper method
    Login() {
      const body = {email: this.state.email, password: this.state.password};
      fetch("http://localhost:8080/auth/login", {method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
          .then(
              (result) => {
                console.log(result);
                if (result.status === 200)
                  this.props.history.push("/");
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
                <h2>Welcome Back</h2>
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
                        onClick={() => this.Login()}
                    >
                        Log In
                    </button>
                </div>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}

export default Login;
