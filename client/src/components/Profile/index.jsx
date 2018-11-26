import React, { Component } from 'react';
import './style.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: 'Jacob Miller',
                location: 'Columbia, SC',
                biography: '22 year old student living in Columbia. Originally from Phoenix, Arizona. Love to hike and travel.',
                accountType: 'Founder',
                joinDate: '11/25/18',
                favoriteCategory: 'Photography',
                dealsPosted: '164'
            },
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

    render() {
        return(
            <div className="App">
                <Image src={this.state.image.link} />
                <Profile person={this.state.person} quote={this.state.quote} />
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
            <img src="https://i.imgur.com/iy4Eo4j.jpg" alt="" width="200" height="200"/>
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

            <b>Favorite Category</b><p className="favoriteCategory">{props.person.favoriteCategory}</p>

            <hr />
            <b>Deals Posted</b><p className="dealsPosted">{props.person.dealsPosted}</p>
        </div>
    );
}

function Image(props){
    return (
        <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    );
}
export default App;
