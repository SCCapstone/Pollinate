import React, {Component} from 'react';
import './style.css';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

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


    return (
        <div className='sidebar' style={{'borderTopColor': this.props.borderColor}}>
          <h4 className='mb-3'>{this.props.title}</h4>
          {posts}
        </div>
    )
  }
}

export default Sidebar;
