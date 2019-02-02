import React, {Component} from 'react';
import {withRouter} from 'react-router';
import './style.css';


class PostsContainer extends Component {
  navigate(id) {
    this.props.history.push("/post/" + id);
  }

  render() {
    const posts = this.props.posts.map(post => {
      return (
          <Post post={post} navigate={() => this.navigate(post.id)} key={post.id}/>
      )
    });

    return (
      <div id="posts" className="container-fluid">
        <div className="row">
          {posts}
        </div>
      </div>
    )
  }
}

function Post(props) {
  return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex">
        <div className="post" onClick={props.navigate}>
          <div className="thumbnail">
            <img src={props.post.imageUrl || "/static/images/no-image-icon.png"} alt=""/>
          </div>
          <div className="details">
            <div>
              <span className="title">{props.post.title}</span>
              <span className="price">${props.post.price}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default withRouter(PostsContainer);
