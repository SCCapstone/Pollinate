import React, { Component } from 'react';
import './style.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="App">
                <Image src={this.state.image.link} />
                <Product productid={this.state.productid} comment={this.state.comment} /> /Add things if needed*/
            </div>
        );
    }
}
function Item (props){
    return (
        <div id="item">
            <div className="productid">
                <div id="productPhoto">
                    <img src="" alt="" width="200" height="200"/>
                </div>
                <h2 className="Name">{props.item.name}</h2>
                <h3 className="price">{props.item.price}</h3>
                <hr />
                <div id="bottom">
                    <h4>Description</h4>
                    <p className="Description">{props.item.description}</p>
                    <div className="comment">
                        <blockquote>&ldquo; {props.comment.content} &rdquo;</blockquote>
                        <div className="byline">&mdash; {props.comement.source}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Image(props){
    return (
        <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>

    );
}

export default Product;
