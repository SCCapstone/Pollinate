import React, { Component } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home/index';
import About from './components/About';
import Header from './components/Header/index'
import Login from './components/Login/index'
import Category from './components/Category/index'
import Profile from './components/Profile/index'
import Product from './components/Product/index'


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
                <Route path="/category" component={Category}/>
                <Route path="/product" component={Product}/>
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
