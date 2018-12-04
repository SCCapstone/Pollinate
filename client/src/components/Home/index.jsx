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
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(posts => this.setState({posts}))

    }


    render() {
      var posts = this.state.posts.map(post => {
          return (
              <Post post={post}/>
          )
      })
      return (

        <div>

            <h1> Popular Deals </h1>

            <p> <button onClick=""> Post A Deal </button> </p>

            <div>
                {posts}
            </div>

        </div>


    )
  }
}

function Post(props)
{
    return(
        <div className="itemBorder" onClick={this.props.history.push("/product/"+ props.post.id)}>
            <img src={props.post.imageUrl}/>
            <h3>{props.post.name}</h3> <h2>{props.post.price}</h2>
        </div>
    )
}
export default Home;
