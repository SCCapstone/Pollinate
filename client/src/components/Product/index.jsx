import React, { Component } from 'react';
import './style.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:8080/api/products/${id}`)
            .then(res => res.json())
            .then(item => this.setState(item));
    }

    getImageUrl() {
      return this.state.imageUrl || "http://localhost:8080/static/images/no-image-icon.png";
    }

    render() {
        return(
            <div className="App">
              <Item url={this.getImageUrl()} name={this.state.name}
                    price={this.state.price} description={this.state.description}/>
            </div>
        );
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

export default Product;
