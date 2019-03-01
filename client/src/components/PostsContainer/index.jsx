import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Post from '../Post'
import './style.css';


class PostsContainer extends Component {
  render() {
    const posts = this.props.posts.map(post => {
      return (
          <Post post={post} key={post.id}/>
      )
    });

    return (
      <div className="posts container-fluid">
        <div className="row">
          {posts}
        </div>
      </div>
    )
  }
}

export default withRouter(PostsContainer);
