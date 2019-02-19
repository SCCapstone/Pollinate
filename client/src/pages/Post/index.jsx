import React, { Component } from 'react';
import './style.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/api/posts/${id}`, {credentials: "same-origin"})
            .then(res => res.json())
            .then(item => this.setState(item));
    }

    getImageUrl() {
      return this.state.imageUrl || "/static/images/no-image-icon.png";
    }

    getLink() {
      let link = this.state.link;
      if (link && link.indexOf('http') === -1)
        return 'http://' + link;

      return link;
    }

    render() {
        return(
            <div>
              <Item imgUrl={this.getImageUrl()} title={this.state.title} link={this.getLink()}
                    price={this.state.price} description={this.state.description}/>
            </div>
        );
    }
}

function Item (props){
    return (
        <div id="item" className="col-s-12 col-lg-8">
            <div className="product">
              <div className="flex">
                <div className="details mr-auto">
                  <h2 className="Name">{props.title}</h2>
                  <h3 className="price">${props.price}</h3>
                </div>
                <div id="productPhoto">
                  <img src={props.imgUrl} alt="" height="100"/>
                </div>
              </div>
              <div className="divider"/>
              <div id="bottom">
                <h4>Description</h4>
                <p className="description">{props.description}</p>
                  <a className="btn btn-primary" rel="noopener noreferrer" target="_blank" href={props.link}>See Deal</a>
                  <div className="voting">
                      <button className="upvoteBtn" type="submit">
                          <i className="fa fa-thumbs-up ml-2 mr-2"/>
                      </button>
                      <button className="downvoteBtn" type="submit">
                          <i className="fa fa-thumbs-down ml-2 mr-2"/>
                      </button>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Product;
