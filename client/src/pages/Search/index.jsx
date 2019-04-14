import React, {Component} from 'react';
import PostsContainer from '../../components/PostsContainer/index';
import Fuse from 'fuse.js';
import queryString from 'query-string';
import './style.css';
import moment from "moment";


class Search extends Component {

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
        .then(posts => this.keywordSearchFilter(posts));
  }

  keywordSearchFilter(posts) {
      const options = {
          shouldSort: true,
          includeScore: true,
          threshold: 0.33,
          location: 0,
          distance: 1000,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
              "title"
          ]
      };
      const query = queryString.parse(this.props.location.search);

      const fuse = new Fuse(posts, options); // "list" is the item array
      const results = fuse.search(query.keyword);
      this.setState({posts:results.map(result => result.item)});
  }

  render() {
    return (
      <div id="SearchPage">
        <h3 className="deal-title ml-3 mb-3"> Searched Deals </h3>
        <PostsContainer posts={this.state.posts}/>
      </div>
    )
  }
}

export default Search;
