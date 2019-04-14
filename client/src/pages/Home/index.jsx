import React, {Component} from 'react';
import moment from 'moment';
import PostsContainer from '../../components/PostsContainer/index';

import './style.css';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("/api/posts", {credentials: "same-origin"})
        .then(res => res.json())
        .then(posts => posts.filter(post => !post.expires_at || moment().isBefore(moment(post.expires_at))))
        .then(posts => this.setState({
          posts: posts.slice(0).reverse(),
          popularPosts: posts.slice(0).sort((a, b) => b['total_likes'] - a['total_likes']).slice(0, 4),
        }))

  }

  navigate(id) {
    this.props.history.push("/post/" + id);
  }

  render() {
    return (
      <div id="HomePage">
        {this.state.posts.length !== 0 &&
        <div>
          <h3 className="deal-title ml-3 mb-3"> Popular Deals </h3>
          <div id="popularPosts"><PostsContainer posts={this.state.popularPosts}/></div>
          <h3 className="deal-title ml-3 mb-3"> Recent Deals </h3>
          <div id="recentPosts"><PostsContainer posts={this.state.posts}/></div>
        </div>}
      </div>
    )
  }
}

export default Home;
