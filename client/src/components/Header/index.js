import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div id={'navBar'}>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/profile">Profile</a>
          <a href="/product">Product</a>
          <a href="/category">Category</a>
          <a href="/about">About</a>
      </div>
    )
  }
}

export default Header;
