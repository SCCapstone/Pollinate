import React, { Component } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import auth from './utils/auth';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header'
import Login from './components/Login'
import Category from './components/Category'
import Profile from './components/Profile'
import Post from './components/Post'
import Signup from './components/Signup'
import NewPost from "./components/NewPost";

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Header auth={auth}/>
            <div className="app">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/category/:category" component={Category}/>
                <Route path="/post/new" component={NewPost}/>
                <Route path="/post/:id" component={Post}/>
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
