import React, {Component} from 'react';
import logo from './logo.png';
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
        </div>
    )
  }
}

export default About;
