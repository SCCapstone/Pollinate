import React, { Component } from 'react';
import './style.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(data => this.setState({items: data}));
    }

    render() {
        let items = this.state.items.map(item => {
          return <Item url={item.imageUrl} name={item.name}
                price={item.price} description={item.description}/>
        });

        return(
            <div className="App">
                 {items}
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
