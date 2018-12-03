import React, { Component } from 'react';
import './style.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      image: {
        link: 'https://i.imgur.com/iy4Eo4j.jpg',
        alt: ''
      },
      quote: {
        content: 'Not all those who wander are lost',
        source: 'J. R. R. Tolkien'
      }

    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/users/me")
        .then(res => res.json())
        .then(person => this.setState({person}))
  }

  render() {
    console.log(this.state);
    return(
        <div className="App">
          <Profile person={this.state.person || {}} quote={this.state.quote} image={this.state.image}/>
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
            <img id="profilePic" src="https://i.imgur.com/iy4Eo4j.jpg" alt="" width="200" height="200"/>
          </div>
          <h2 className="Name">{props.person.name}</h2>
          <h3 className="Location">{props.person.location}</h3>
          <hr />
          <div id="bottom">
            <h4>Biography</h4>
            <p className="Bio">{props.person.biography}</p>
            <div className="Quote">
              <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
              <div className="byline">&mdash; {props.quote.source}</div>
            </div>
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
