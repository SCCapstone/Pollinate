import React, { Component } from 'react';
import './style.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(data => data[0])
            .then(item => this.setState(item));
    }

    render() {
        return(
            <div className="App">
              <Item url={this.state.imageUrl} name={this.state.name}
                    price={this.state.price} description={this.state.description}/>
            </div>
        );
    }
}

function Item (props){
    return (
        <div id="item">
            <div className="productid">
                <div id="productPhoto">
                    <img src={props.url} alt="" width="100" height="100"/>
                </div>
                <h2 className="Name">{props.name}</h2>
                <h3 className="price">{props.price}</h3>
                <hr />
                <div id="bottom">
                    <h4>Description</h4>
                    <p className="Description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
