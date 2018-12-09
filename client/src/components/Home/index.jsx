import React, {Component} from 'react';
import './style.css';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("/api/posts")
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
          <h3 className="deal-title ml-3 mb-3"> Popular Deals </h3>
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
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="post" onClick={props.navigate}>
          <div className="thumbnail">
            <img src={props.post.imageUrl || "/static/images/no-image-icon.png"} alt=""/>
          </div>
          <div className="details">
            <div>
              <span className="title">{props.post.title}</span>
              <span className="price">${props.post.price}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home;
