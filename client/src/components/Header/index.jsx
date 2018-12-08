import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import './style.css';
import pic from "./pollinate logo.png"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    }
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img className="pb-2" src={pic} height="45" alt=""/>
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
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/category/apparel">Apparel</Link>
                  <Link className="dropdown-item" to="/category/technology">Technology</Link>
                  <Link className="dropdown-item" to="/category/tools">Tools</Link>
                  <Link className="dropdown-item" to="/category/other">Other</Link>
                </div>
              </li>
              {this.state.user &&
              <li className="nav-item px-2">
                <a className="nav-link" href="#" onClick={() => this.logout()}>Logout</a>
              </li>}
            </ul>
            <form className="form-inline my-2 my-lg-0 mr-3" onSubmit={e => this.search(e)}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"
                       onInput={e => this.setState({search: e.target.value})}/>
                <div className="input-group-append">
                  <button className="btn" type="submit">
                    <i className="fa fa-search"/>
                  </button>
                </div>
              </div>
            </form>
            {this.state.user &&
            <button className="btn btn-primary" onClick={() => this.props.history.push("/post/new")}>Post a Deal
            </button>}
          </div>
        </nav>
    )
  }
}

export default withRouter(Header);
