import React, {Component} from 'react';
import './style.css';
import {withRouter} from "react-router";


class Post extends Component {
  navigate() {
    this.props.history.push("/post/" + this.props.post.id);
  }

  render() {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
          <div className="post" onClick={() => this.navigate()}>
            <div className="thumbnail">
              <img src={this.props.post.imageUrl || "/static/images/no-image-icon.png"} alt=""/>
            </div>
            <div className="details">
              <div>
                <span className="title">{this.props.post.title}</span>
                <span className="price">${this.props.post.price}</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(Post);
