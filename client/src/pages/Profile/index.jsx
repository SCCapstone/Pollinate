import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    fetch("/api/users/me", {credentials: "same-origin"})
        .then(res => res.json())
        .then(person => this.setState({person}))
  }

  static formatDate(date) {
    if (date)
      return new Date(date).toDateString();
  }

  render() {
    console.log(this.state.person);
    return(
        <div className="App">
          <div id="user-profile">
            <div className="Profile">
              {/*Until I can get the constructor to work img src is here*/}
              <div id="avatar">
                <img id="profilePic" src={this.state.person.profileImgUrl || "/static/images/no-image-icon.png"}
                     alt="" width="200" height="200"/>
              </div>
              <h2 className="Name">{this.state.person.name}</h2>
              <h3 className="Location">{this.state.person.location}</h3>
              <hr />
              <div id="bottom">
                <h4>Biography</h4>
                <p className="Bio">{this.state.person.biography}</p>
              </div>

            </div>
            <hr />
            <b>Account Type</b><p className="accountType">{this.state.person.accountType || 'User'}</p>

            <b>Join Date</b><p className="joinDate">{App.formatDate(this.state.person.created_at)}</p>

            {/*<b>Favorite Category</b><p className="favoriteCategory">{this.state.person.favoriteCategory}</p>*/}

            <hr />
            <b>Deals Posted</b><p className="dealsPosted">{this.state.person.dealsPosted}</p>
            <Link to='/editprofile' className='btn btn-primary mt-2'>Edit Profile</Link>
          </div>
        </div>
    );
  }
}


export default App;
