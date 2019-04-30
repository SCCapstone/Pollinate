import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Post from '../Post'
import './style.css';

//Container to render all the posts that are passed into it in a grid format
class PostsContainer extends Component {
  //Mapping all items in the posts array to Post components
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
