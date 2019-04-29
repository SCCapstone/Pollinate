import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'
import Search from '../Search';
import './style.css';
import pic from "./pollinate logo bold.png"


//User is not signed in -- display default page
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }

  //A user is currently signed in
  componentDidMount() {
    if (this.props.auth)
      this.props.auth.getUser().then(user => this.setState({user}));
  }

  //Executes a search when typed into the search bar and enter is pressed
  search(e) {
    e.preventDefault();
    console.log(this.state.search);
  }

  //Logs a user out of a signed in status
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

  /*
      This render method displays everything on a main page area:
      Navbar, button links to Home Page, Profile Page, Category sorting and the categories available,
      Tutorial Page, and About Page.

      It also displays buttons redirecting to the Log In Page and Sign Up Page (if a user is not signed in), or the Post a Deal button/page
      and Log Out button (if a user is signed in).

      There is also a menu-collapse button (if on mobile or running in a small screen area).


   */
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
              <li className="nav-item px-2">
                <Link className="nav-link" to="/tutorial">Tutorial</Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <Search/>
            {this.state.user &&
            <button id="postDealBtn" className="btn btn-primary mr-3" onClick={() => this.props.history.push("/post/new")}>Post a Deal
            </button>}
            {!this.state.user &&
              <Link className="nav-link" style={{color: 'rgba(0,0,0,0.5)', padding: '0.5rem 0.5rem'}} to="/login">Login</Link>
            }
            {!this.state.user &&
              <Link className="nav-link" style={{color: 'rgba(0,0,0,0.5)', padding: '0.5rem 0.5rem'}} to="/signup">Signup</Link>
            }
            {this.state.user &&
              <button className="nav-link btn btn-link" style={{color: 'rgba(0,0,0,0.5)', padding: '0.5rem 0.5rem'}} onClick={() => this.logout()}>Logout</button>
            }
          </div>
        </nav>
    )
  }
}

export default withRouter(Header);
