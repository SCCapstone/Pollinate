import React, {Component} from 'react';
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
    fetch("http://localhost:8080/api/posts", {credentials: "same-origin"})
        .then(res => res.json())
        .then(posts => this.setState({posts}))

  }

  navigate(id) {
    this.props.history.push("/post/" + id);
  }

  render() {
    return (
      <div id="HomePage">
        <h3 className="deal-title ml-3 mb-3"> Popular Deals </h3>
        <PostsContainer posts={this.state.posts}/>
      </div>
    )
  }
}

export default Home;
