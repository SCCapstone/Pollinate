import React, {Component} from 'react';
import logo from './pollinate logo bold.png';
import Jacob from './Jacob.jpg';
import Bailey from './Bailey.jpg';
import Blake from './Blake.jpg';
import Justin from './Justin.jpg';
import Mike from './Mike.jpg';
import './style.css';

class About extends Component {
    render() {
        return (
            <div id="AboutPage">
                <div className="headline">
                    <img alt="profile-pic" src={logo} align="middle"/>
                    <p>Bringing you the best products at prices you'll love</p>
                </div>
                <h4 className="founders-header">Meet the Founders</h4>
                <div className="founders">

                    <figure className='foundee-figure'>
                        <img alt="profile-pic" className="foundee" src={Mike}/>
                        <a href="https://www.linkedin.com/in/michael-afrin/"><i className="fab fa-linkedin fa-lg"/></a>
                        <figcaption>Michael Afrin</figcaption>
                    </figure>


                    <figure className='foundee-figure'>
                        <img alt="profile-pic" className="foundee" src={Jacob}/>
                        <a href="https://www.linkedin.com/in/christopher-jacob-miller/"><i
                            className="fab fa-linkedin fa-lg"/></a>
                        <figcaption>Jacob Miller</figcaption>
                    </figure>

                    <figure className='foundee-figure'>
                        <img alt="profile-pic" className="foundee" src={Bailey}/>
                        <a href="https://www.linkedin.com/in/bailey-a-metz/"><i className="fab fa-linkedin fa-lg"/></a>
                        <figcaption>Bailey Metz</figcaption>
                    </figure>

                    <figure className='foundee-figure'>
                        <img alt="profile-pic" className="foundee" src={Blake}/>
                        <a href="https://www.linkedin.com/in/blake-pathammavong-b65076135/"><i
                            className="fab fa-linkedin fa-lg"/></a>
                        <figcaption>Blake Pathammavong</figcaption>
                    </figure>


                    <figure className='foundee-figure'>
                        <img alt="profile-pic" className="foundee" src={Justin}/>
                        <a href="https://www.linkedin.com/in/justindavidmorris/"><i className="fab fa-linkedin fa-lg"/></a>
                        <figcaption>Justin Morris</figcaption>
                    </figure>
                </div>

                <div className="grass"/>
            </div>

        )
    }
}

export default About;
