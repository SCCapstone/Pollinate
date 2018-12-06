import React, { Component } from 'react';
import './style.css';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://pollinate-usc.herokuapp.com/api/posts")
            .then(res => res.json())
            .then(posts => this.setState({posts}))

    }

    navigate(id) {
      this.props.history.push("/post/" + id);
    }

    render() {
      var posts = this.state.posts.map(post => {
          return (
              <Post post={post} navigate={() => this.navigate(post.id)} key={post.id}/>
          )
      });

      return (

        <div id="HomePage">

            <h1> Popular Deals </h1>

            <p> <button onClick={() => this.props.history.push("/post/new")}> Post A Deal </button> </p>

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
export default Home;
