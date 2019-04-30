import React, {Component} from 'react';
import './style.css';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //Mapping all items in the posts array to Post components
  render() {
    let posts = this.props.posts || [];
    posts = posts.map(post => {
      return (
          <div className='mb-3 sidebar-post' key={post.id}>
            <a className='link' href={`/post/${post.id}`}>
              <img src={post.imageUrl} width='60px' className='link-img mr-2' alt='icon'/>
              <span>{post.title}</span>
            </a>
          </div>
      )
    });

    /*
            Displaying the sidebar area on the right side of a product's page and passing in the previously posted items
            that have the highest number of stars.  If there are posts that have the same number of stars, this algorithm
            uses the original ordering based on the post's ID number.  The current post being viewed by the user
            is filtered out of the popular posts sidebar.
     */
    return (
        <div className='sidebar' style={{'borderTopColor': this.props.borderColor}}>
            <h4 className='mb-3'>{this.props.title}</h4>
            {posts}
        </div>
    )
  }
}

export default Sidebar;
