import React, {Component} from 'react';
import logo from './logo.png';
import Jacob from './Jacob.jpg';
import Bailey from './Bailey.jpeg';
import Blake from './Blake.jpg';
import Justin from './Justin.jpg';
import Mike from './Mike.jpg';
import './style.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="headline">
                    <img src={logo} width="500" height="100" align="middle"/>
                    <p> Pollinate's mission is to organize the internet's best sales and deals, all while making it
                        universally convenient </p>
                </div>
                <h4 className="founders">Meet the Founders</h4>
                <figure>

                    <img className="foundee" src={Jacob}/>

                    <figcaption>Jacob Miller</figcaption>
                </figure>
                <a href="https://www.linkedin.com/in/christopher-jacob-miller/"><i
                    className="fab fa-linkedin fa-lg"></i></a>
                <figure>
                    <img className="foundee" src={Bailey}/>
                    <figcaption>Bailey Metz</figcaption>
                </figure>
                <a href="https://www.linkedin.com/in/bailey-a-metz/"><i className="fab fa-linkedin fa-lg"></i></a>
                <figure>
                    <img className="foundee" src={Blake}/>
                    <figcaption>Blake Pathammavong</figcaption>
                </figure>
                <a href="https://www.linkedin.com/in/blake-pathammavong-b65076135/"><i
                    className="fab fa-linkedin fa-lg"></i></a>
                <figure>
                    <img className="foundee" src={Justin}/>
                    <figcaption>Justin Morris</figcaption>
                </figure>
                <a href="https://www.linkedin.com/in/justindavidmorris/"><i className="fab fa-linkedin fa-lg"></i></a>
                <figure>
                    <img className="foundee" src={Mike}/>
                    <figcaption>Michael Afrin</figcaption>
                </figure>
                <a href="https://www.linkedin.com/in/michael-afrin/"><i className="fab fa-linkedin fa-lg"></i></a>

                <div className="grass">.</div>

            </div>

        )
    }
}

export default About;
