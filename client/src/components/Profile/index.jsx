import React, { Component } from 'react';
import './style.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    fetch("https://pollinate-usc.herokuapp.com/api/users/1")
        .then(res => res.json())
        .then(person => this.setState({person}))
  }

  render() {
    console.log(this.state);
    return(
        <div className="App">
          <Profile person={this.state.person}/>
        </div>
    );
  }
}
function Profile(props){
  return (
      <div id="user-profile">
        <div className="Profile">
          {/*Until I can get the constructor to work img src is here*/}
          <div id="avatar">
            <img id="profilePic" src={props.person.profileImgUrl} alt="" width="200" height="200"/>
          </div>
          <h2 className="Name">{props.person.name}</h2>
          <h3 className="Location">{props.person.location}</h3>
          <hr />
          <div id="bottom">
            <h4>Biography</h4>
            <p className="Bio">{props.person.biography}</p>
          </div>

        </div>
        <hr />
        <b>Account Type</b><p className="accountType">{props.person.accountType}</p>

        <b>Join Date</b><p className="joinDate">{props.person.joinDate}</p>

        {/*<b>Favorite Category</b><p className="favoriteCategory">{props.person.favoriteCategory}</p>*/}

        <hr />
        <b>Deals Posted</b><p className="dealsPosted">{props.person.dealsPosted}</p>
      </div>
  );
}


export default App;
