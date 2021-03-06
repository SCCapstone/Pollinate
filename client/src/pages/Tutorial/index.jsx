import React, {Component} from 'react';
import HomePage from './HomePage.png';
import CategoryPage from './CategoryPage.png';
import ItemPage from './ItemPage.png';
import LoginPage from './LoginPage.png';
import NewPostPage from './NewPostPage.png';
import ProfilePage from './ProfilePage.png';
import SearchPage from './SearchPage.png';
import SignUpPage from './SignUpPage.png';
import './style.css';

/*
This is our tutorial page that teaches users how to use the web app
*/

class Tutorial extends Component {
    //This renders our pictures and youtube video
  render() {
    return (
        <div>
            <h1 className="headline">Video Tutorial</h1>
            <div className="headline">
                <iframe title="youtube" width="560" height="315" src="https://www.youtube.com/embed/rQTtZSnJeoc" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
            <h1 className="scrnmessage">Pollinate Home Page</h1>
            <div className="screenshot">
                <img alt='screenshot' className="screenshot" src={HomePage}/>
            </div>
            <h2 className="scrnmessage">Pollinate Category Page</h2>
            <div className="screenshot">
                <img alt='screenshot' className="screenshot" src={CategoryPage}/>
            </div>
            <h3 className="scrnmessage">Pollinate Item Page</h3>
            <div className="screenshot">
                <img alt='screenshot' className="screenshot" src={ItemPage}/>
            </div>
            <h4 className="scrnmessage">Pollinate Login Page</h4>
            <div className="screenshot">
                <img alt='screenshot' className="screenshot" src={LoginPage}/>
            </div>
            <h4 className="scrnmessage">Pollinate New Post Page</h4>
            <div className="screenshot">
                <img alt='screenshot' className="signup" src={NewPostPage}/>
            </div>
            <h5 className="scrnmessage">Pollinate Profile Page</h5>
            <div className="screenshot">
                <img alt='screenshot' className="screenshot" src={ProfilePage}/>
            </div>
            <h6 className="scrnmessage">Pollinate Search Page</h6>
            <div className="screenshot">
                <img alt='screenshot' className="screenshot" src={SearchPage}/>
            </div>
            <h4 className="scrnmessage">Pollinate SignUp Page</h4>
            <div className="screenshot">
                <img alt='screenshot' className="signup" src={SignUpPage}/>
            </div>
        </div>
    )
  }
}

export default Tutorial;
