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

    navigate(id) {
      this.props.history.push("/product/" + id);
    }

    render() {
      var posts = this.state.posts.map(post => {
          return (
              <Post post={post} navigate={() => this.navigate(post.id)} key={post.id}/>
          )
      });

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
        <div className="itemBorder" onClick={props.navigate}>
            <img src={props.post.imageUrl} alt="" height="200" width="200"/>
            <h3>{props.post.name}</h3> <h2>{props.post.price}</h2>
        </div>
    )
}
export default Home;
