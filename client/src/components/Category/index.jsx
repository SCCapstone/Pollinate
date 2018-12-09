import React, {Component} from 'react';
import './style.css';
import {capitalize} from "../../utils/helper";


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.fetchData(this.props.match.params.category);
    }
  }

  fetchData(category) {
    fetch("http://localhost:8080/api/category/" + category)
        .then(res => res.json())
        .then(data => this.setState({data}));
  }

  navigate(id) {
    this.props.history.push("/post/" + id);
  }

  render() {
    const posts = this.state.data.map(post => {
      return (
          <Post post={post} key={post.id} navigate={() => this.navigate(post.id)}/>
      )
    });

    return (
        <div id="CategoryPage">
          <h3 className="deal-title ml-3 mb-3">{capitalize(this.props.match.params.category)}</h3>
          <div id="posts" className="container-fluid">
            <div className="row">
              {posts}
            </div>
          </div>
        </div>
    )
  }
}

function Post(props) {
  return (
      <div className="col-s-12 col-md-4 col-lg-3 mb-4">
        <div className="post" onClick={props.navigate}>
          <div className="thumbnail">
            <img src={props.post.imageUrl || "/static/images/no-image-icon.png"} alt=""/>
          </div>
          <div className="details">
            <span className="title">{props.post.title}</span>
            <span className="price">${props.post.price}</span>
          </div>
        </div>
      </div>
  )
}

export default Category;
