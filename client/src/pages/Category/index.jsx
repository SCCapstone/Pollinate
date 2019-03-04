import React, {Component} from 'react';
import './style.css';
import {capitalize} from "../../utils/helper";
import PostsContainer from "../../components/PostsContainer";


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.category);
  }

  fetchData(category) {
    fetch("/api/category/" + category, {credentials: "same-origin"})
        .then(res => res.json())
        .then(posts => this.setState({posts: posts.reverse()}));
  }

  render() {
    return (
        <div id="CategoryPage">
          <h3 className="deal-title ml-3 mb-3">{capitalize(this.props.match.params.category)}</h3>
          <PostsContainer posts={this.state.posts}/>
        </div>
    )
  }
}

export default Category;
