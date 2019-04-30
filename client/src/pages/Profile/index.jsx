import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './style.css';

/*
This is our profile page that displays the users entered information
*/

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  //This checks to see if the user updated the component recently and gets the data
  componentDidUpdate(oldProps) {
    if (oldProps.match.params.id !== this.props.match.params.id)
      this.getData();
  }

  //This gets the information from the user that is logged in
  getData() {
    const id = this.props.match.params.id;
    if(id) {
      fetch(`/api/users/${id}`, {credentials: "same-origin"})
          .then(res => res.json())
          .then(person => this.setState({person, isLoggedInUser: false}))
    } else {
      fetch("/api/users/me", {credentials: "same-origin"})
          .then(res => res.json())
          .then(person => this.setState({person, isLoggedInUser: true}))
    }
  }

  //This method pulls the current date
  static formatDate(date) {
    if (date)
      return new Date(date).toDateString();
  }

  //This method renders the profile information
  render() {
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
                <ReactMarkdown className="biography" source={this.state.person.biography}/>
              </div>

            </div>
            <hr />
            <b>Account Type</b><p className="accountType">{this.state.person.accountType || 'User'}</p>

            <b>Join Date</b><p className="joinDate">{App.formatDate(this.state.person.created_at)}</p>

            <hr />
            <b>Deals Posted</b><p className="dealsPosted">{this.state.person.dealsPosted}</p>
            {this.state.person && this.state.isLoggedInUser &&
            <Link to='/editprofile' className='btn btn-primary mt-2'>Edit Profile</Link>}
          </div>
        </div>
    );
  }
}


export default App;
