import React, { Component } from 'react';
import './style.css';


class Login extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    //LogIn helper method
    login(e) {
      e.preventDefault();
      const body = {email: this.state.email, password: this.state.password};
      fetch("/api/auth/login", {credentials: "same-origin", method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
          .then(res => {
                if (res.status === 200)
                  this.props.history.push("/");
                else if (res.status === 401)
                  res.text().then(text => this.setState({error: text}));
          });
    }

    render() {
        return (
            <div id="LoginPage">
                <h2 className="text-center mb-3">Welcome Back</h2>
                <form id="LoginForm" className="mx-auto" onSubmit={e => this.login(e)}>
                  <label htmlFor="email">Email</label>
                  <div className="input-group mb-1">
                    <input className="form-control" type="email" name="email" required
                           onInput={e => this.setState({email: e.target.value})}/>
                  </div>

                  <label htmlFor="password">Password</label>
                  <div className="input-group mb-1">
                    <input className="form-control" type="password" name="password" required
                           onInput={e => this.setState({password: e.target.value})}/>
                  </div>
                  <span className='is-invalid'>{this.state.error}</span>
                  <div className="input-group mt-3">
                    <input className="form-control btn btn-primary" type="submit" value="Submit"/>
                  </div>
                </form>
            </div>
        )
    }
}

export default Login;
