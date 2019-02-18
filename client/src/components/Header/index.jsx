import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import Search from '../Search';
import './style.css';
import pic from "./pollinate logo.png"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }

  componentDidMount() {
    if (this.props.auth)
      this.props.auth.getUser().then(user => this.setState({user}));
  }

  search(e) {
    e.preventDefault();
    console.log(this.state.search);
  }

  logout() {
    this.props.auth.logout().then(ok => {
      if (ok)
        this.props.history.push('/');
    })
  }

  componentDidUpdate(oldProps) {
    if (oldProps.location.key !== this.props.location.key) {
      this.props.auth.getUser().then(user => this.setState({user}));
      window.scroll(0, 0);
    }
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand py-0" to="/">
            <img className="pb-2" src={pic} height="50" alt=""/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item px-2">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {!this.state.user &&
              <li className="nav-item px-2">
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
              {!this.state.user &&
              <li className="nav-item px-2">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>}
              {this.state.user &&
              <li className="nav-item px-2">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>}
              <li className="nav-item px-2 dropdown">
                <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/category/apparel">Apparel</Link>
                  <Link className="dropdown-item" to="/category/technology">Technology</Link>
                  <Link className="dropdown-item" to="/category/tools">Tools</Link>
                  <Link className="dropdown-item" to="/category/other">Other</Link>
                </div>
              </li>
              {this.state.user &&
              <li className="nav-item px-2">
                <button className="nav-link btn btn-link" onClick={() => this.logout()}>Logout</button>
              </li>}
            </ul>
            <Search/>
            {this.state.user &&
            <button className="btn btn-primary" onClick={() => this.props.history.push("/post/new")}>Post a Deal
            </button>}
          </div>
        </nav>
    )
  }
}

export default withRouter(Header);
