import React, {Component} from 'react';
import logo from './logo.png';
import Jacob from './Jacob.jpg';
import Bailey from './Bailey.jpg';
import Blake from './Blake.jpg';
import Justin from './Justin.jpg';
import Mike from './Mike.jpg';
import './style.css';

class About extends Component {
  render() {
    return (
        <div>
            <div className ="headline">
                <img src={logo} width="500" height="100" align="middle"/>
          <p> Pollinate's mission is to organize the internet's best sales and deals, all while making it universally convenient </p>
            </div>
            <h4 className = "founders">Meet the Founders</h4>
                <figure>

                <img className = "foundee" src={Jacob}/>
                <figcaption>Jacob Miller</figcaption>
                </figure>
                  <figure>
            <img className = "foundee" src={Bailey}/>
                <figcaption>Bailey Metz</figcaption>
                  </figure>
            <figure>
            <img className = "foundee" src={Blake}/>
                <figcaption>Blake Pathammavong</figcaption>
            </figure>
            <figure>
            <img className = "foundee" src={Justin}/>
                <figcaption>Justin Morris</figcaption>
            </figure>
            <figure>
            <img className = "foundee" src={Mike}/>
                <figcaption>Michael Afrin</figcaption>
            </figure>

            <div className="grass">.</div>

        </div>

    )
  }
}

export default About;
