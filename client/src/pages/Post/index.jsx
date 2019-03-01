import React, {Component} from 'react';
import './style.css';
import VoteCounter from "../../components/VoteCounter";
import auth from '../../utils/auth.js';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    fetch(`/api/posts/${id}`, {credentials: "same-origin"})
        .then(res => res.json())
        .then(item => this.setState(item));
    auth.getUser().then(user => this.setState({user}));
  }

  getImageUrl() {
    return this.state.imageUrl || "/static/images/no-image-icon.png";
  }

  getLink() {
    let link = this.state.link;
    if (link && link.indexOf('http') === -1)
      return 'http://' + link;

    return link;
  }

  deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      fetch(`/api/posts/${this.state.id}`, {
        credentials: "same-origin",
        method: 'delete',
        headers: {'Content-Type': 'application/json'}
      })
          .then(res => {
            if (res.ok) {
              this.props.history.push("/");
            }
          })
    }
  }

  render() {
    let userId = this.state.user ? this.state.user.id : undefined;
    return (
        <div>
          <div id="item" className="col-s-12 col-lg-8 mb-2">
            <div className="product">
              <div className="flex">
                <div className="details">
                  <h2 className="Name">{this.state.title}</h2>
                  <h3 className="price">${this.state.price}</h3>
                  {this.state.id && <VoteCounter postId={this.state.id} userId={userId}/>}
                </div>
                <div id="productPhoto" className="flex justify-content-end">
                  <img src={this.getImageUrl()} alt="" height="100"/>
                </div>
              </div>
              <div className="divider"/>
              <div id="bottom">
                <h4>Description</h4>
                <p className="description">{this.state.description}</p>
                <div className="divider mb-3"/>
                {this.state.link &&
                <a className="btn btn-primary mr-3" rel="noopener noreferrer" target="_blank" href={this.getLink()}>See
                  Deal</a>}
                {this.state.user && userId === this.state.author &&
                <button id="deletePostBtn" type="button" className="btn btn-danger"
                        onClick={() => this.deletePost()}>Delete</button>}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Product;
