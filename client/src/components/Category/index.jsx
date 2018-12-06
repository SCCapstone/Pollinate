import React, { Component } from 'react';
import './style.css';
import {capitalize} from "../../utils/helper";


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:props.match.params.category,
            data:[]
        }
    }
    componentDidMount() {
        fetch("https://pollinate-usc.herokuapp.com/api/category/" + this.state.category)
            .then(res => res.json())
            .then(data => this.setState({data}));
    }

  navigate(id) {
    this.props.history.push("/post/" + id);
  }

  render() {
        var posts = this.state.data.map(post => {
            return (
                <Post post={post} key={post.id} navigate={() => this.navigate(post.id)}/>
            )
        });
    return (
      <div id="CategoryPage">
          <h1>{capitalize(this.state.category)}</h1>
          <div id="posts">
            {posts}
          </div>
      </div>
    )
  }
}

function Post(props)
{
  return(
      <div className="post" onClick={props.navigate}>
        <img className="thumbnail" src={props.post.imageUrl || "https://pollinate-usc.herokuapp.com/static/images/no-image-icon.png"} alt="" height="150"/>
        <div className="details">
          <span className="title">{props.post.title}</span>
          <span className="price">${props.post.price}</span>
        </div>
      </div>
  )
}

export default Category;
