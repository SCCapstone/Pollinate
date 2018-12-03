import React, { Component } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header'
import Login from './components/Login'
import Category from './components/Category'
import Profile from './components/Profile'
import Product from './components/Product'
import Signup from './components/Signup'


import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/category" component={Category}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/about" component={About}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
