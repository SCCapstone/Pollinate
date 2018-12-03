import React, { Component } from 'react';
import './style.css';

class Category extends Component {
  render() {
    return (
      <div>
          <h1>Category</h1>
          <div className="categories">
              <p> Clothing </p>
              <p> Electronics </p>
              <p> Food </p>
              <p> Automotive </p>
          </div>
          <div className="filters">
              <h3>Filters:</h3>
              <p> Date: Oldest to Newest </p>
              <p> Date: Newest to Oldest </p>
              <p> Price: Highest to Lowest </p>
              <p> Price: Lowest to Highest </p>
          </div>
          <div className="images">
              <img src=""/>
          </div>


          <img src="https://camo.githubusercontent.com/252e6da4490fe37c498a78f3076f4c8e048ce129/68747470733a2f2f692e696d6775722e636f6d2f4e6130754737582e706e67" alt=""/>
      </div>
    )
  }
}

export default Category;
