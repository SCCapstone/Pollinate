import React, {Component} from 'react';
import './style.css';
import {capitalize} from "../../utils/helper";
import PostsContainer from "../../components/PostsContainer";
import moment from "moment";


class Category extends Component {
  /*
  This is our category page that displays deals depending on category chosen
  Categories that are included are 'Apparel', 'Technology', 'Tools', and 'Other'.
  */
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  //This method checks the item and see if it matches to the chosen category before it's displayed
  componentDidMount() {
    this.fetchData(this.props.match.params.category);
  }
  //This fetches data from the database to check which category each item belongs to
  fetchData(category) {
    fetch("/api/category/" + category, {credentials: "same-origin"})
        .then(res => res.json())
        .then(posts => posts.filter(post => !post.expires_at || moment().isBefore(moment(post.expires_at))))
        .then(posts => this.setState({posts: posts.reverse()}));
  }
  //This render function will display the posts on the page relating to the post container that is linked
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
