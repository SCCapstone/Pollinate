import React, { Component } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import auth from './utils/auth';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header'
import Login from './pages/Login'
import Category from './pages/Category'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Signup from './pages/Signup'
import NewPost from "./pages/NewPost";
import Search from "./pages/Search";

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
                <Route path="/category/:category" render={(props) => (
                    <Category key={props.match.params.category} {...props} />
                )}/>
                <Route path="/post/new" component={NewPost}/>
                <Route path="/post/:id" component={Post}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/about" component={About}/>
                <Route path="/search" render={(props) => (
                    <Search key={props.location.search} {...props} />
                )}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
