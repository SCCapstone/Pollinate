import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  render() {

      return (

        <div className="text-center">

            <h1> Popular Deals </h1>

            <p> <button onClick=""> Post A Deal </button> </p>

            <div>


                <div className="filters">
                    <img src="https://static.shoplightspeed.com/shops/619494/files/009061409/800x1024x2/brushy-logo-mug-white-circle-keys-logo-coffee-mug.jpg" width="200" height="200"/>
                    <h3>Coffee Mug</h3> <h2>$3.99</h2>

                    <img src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/kod3bxfy7vx99bca26cb/elite-competition-8p-basketball-721MyM.jpg" width="200" height="200"/>
                    <h3>Basketball</h3> <h2>$29.99</h2>

                    <img src="https://www.gorillacasestore.com/wp-content/uploads/2017/07/waterproof-iphone-7-case-red-1-800x800.jpg" width="200" height="200"/>
                    <h3>iPhone 7 Case</h3> <h2>$10.99</h2>

                </div>

                <div className="images">
                    <img src=""/>
                </div>
            </div>

        </div>







    )
  }
}

export default Home;
