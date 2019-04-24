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
                <img className = "foundee" src={Jacob}/>
            <img className = "foundee" src={Bailey}/>
            <img className = "foundee" src={Blake}/>
            <img className = "foundee" src={Justin}/>
            <img className = "foundee" src={Mike}/>
        </div>
    )
  }
}

export default About;
