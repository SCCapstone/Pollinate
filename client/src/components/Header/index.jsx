import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import pic from "./Pollinate.JPG"

class Header extends Component {
  render() {
    return (
      <div id={'navBar'}>
          <img src={pic} height="100" alt="" />
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/product/1">Product</Link>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Header;
