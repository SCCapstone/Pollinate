import React, { Component } from 'react';
import './style.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:props.match.params.category,
            data:[]
        }
    }
    componentDidMount() {
        fetch("https://pollinate-usc.herokuapp.com/api/category/" + this.state.category)
            .then(res => res.json())
            .then(data => this.setState({data}));
    }

  render() {
        var items = this.state.data.map(item => {
            return (
                <Item name={item.name} url={item.imageUrl} price={item.price}
                description={item.description}> </Item>
            )
        });
    return (
      <div>
          <h1>Category</h1>
          {/*<div className="filters">
              <h3>Filters:</h3>
              <p> Date: Oldest to Newest </p>
              <p> Date: Newest to Oldest </p>
              <p> Price: Highest to Lowest </p>
              <p> Price: Lowest to Highest </p>
          </div> */}
          {items}
      </div>
    )
  }
}
function Item (props){
    return (
        <div id="item">
            <div className="product">
                <div className="flex">
                    <div className="details column">
                        <h2 className="Name">{props.name}</h2>
                        <h3 className="price">{props.price}</h3>
                    </div>
                    <div id="productPhoto" className="column">
                        <img src={props.url} alt="" width="100" height="100"/>
                    </div>
                </div>
                <div className="divider"/>
                <div id="bottom">
                    <h4>Description</h4>
                    <p className="Description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Category;
