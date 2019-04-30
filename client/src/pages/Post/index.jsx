import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import './style.css';
import VoteCounter from "../../components/VoteCounter";
import auth from '../../utils/auth.js';
import Sidebar from "../../components/Sidebar";
import Comments from "../../components/Comments";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*
    This is our new post page that is very similar to the edit post page
    */

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`/api/posts/${id}`, {credentials: "same-origin"})
            .then(res => res.json())
            .then(item => this.setState(item))
            .then(() => this.getPopularPosts(5));
        auth.getUser().then(user => this.setState({user}));
        this.getComments(id);
}
    //This method pulls the comments from the database
    getComments(id){
        fetch(`/api/comments/${id}`, {credentials: "same-origin"})
        .then(res => res.json())
            .then(comments => this.setState({comments}))
    }

    //This method displays and pulls the popular upvoted deals
  getPopularPosts(amount) {
    fetch("/api/posts", {credentials: "same-origin"})
        .then(res => res.json())
        .then(posts => posts.filter(post => !post.expires_at || moment().isBefore(moment(post.expires_at))))
        .then(posts => this.setState({
          popularPosts: posts.filter(post => post.id !== this.state.id).sort((a, b) => b['total_likes'] - a['total_likes']).slice(0, amount),
        }))
  }
    //This method pulls the image URL from the post
  getImageUrl() {
    return this.state.imageUrl || "/static/images/no-image-icon.png";
  }

  //This method pulls the link from the current state
  getLink() {
    let link = this.state.link;
    if (link && link.indexOf('http') === -1)
      return 'http://' + link;

    return link;
  }

  //This method deletes the post from the database
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

  //This method only displays if the post relates to the logged in user
  isEditable() {
    const created_at = new Date(this.state.created_at);
    return this.state.user && this.state.user.id === this.state.author
        && (new Date()).getTime() < (created_at.getTime() + 15 * 60000);
  }

  //This method renders the current post
  render() {
    let userId = this.state.user ? this.state.user.id : undefined;
    return (
        <div>
          <div className="row mt-4">
            <div className="col-s-12 col-lg-8 mb-4">
              <div id="item">
                <div className="product">
                  <img className='d-sm-none mb-3' src={this.getImageUrl()} alt="" height="100"/>
                  <div className="flex">
                    <div className="details">
                      <h2 className="Name">{this.state.title}</h2>
                      <h3 className="price">${this.state.price}</h3>
                      {this.state.id && <VoteCounter postId={this.state.id} userId={userId}/>}
                    </div>
                    <div id="productPhoto" className="flex justify-content-end">
                      <img src={this.getImageUrl()} alt="" height="100" className='d-none d-sm-block'/>
                    </div>
                  </div>
                  <div className="divider"/>
                  <div id="bottom">
                    <h4>Description</h4>
                    <ReactMarkdown className="description" source={this.state.description}/>
                    {this.state.expires_at && <b>Expires: {moment(this.state.expires_at).format('l')}</b>}
                    <div className="divider mb-3"/>
                    {this.state.link &&
                    <a className="btn btn-primary mr-3 mb-2" rel="noopener noreferrer" target="_blank" href={this.getLink()}>See
                      Deal</a>}
                    {this.state.id && this.isEditable() &&
                    <button id="editDealBtn" className="btn btn-primary mr-3 mb-2"
                            onClick={() => this.props.history.push(`/editdeal/${this.state.id}`)}>Edit deal</button>}
                    {this.state.user && userId === this.state.author &&
                    <button id="deletePostBtn" type="button" className="btn btn-danger mb-2"
                            onClick={() => this.deletePost()}>Delete</button>}
                  </div>
                </div>
              </div>
              {this.state.comments &&
                    <Comments comments={this.state.comments} postId={this.props.match.params.id} user={this.state.user}/>}
            </div>
            <div className='col-s-12 col-lg-4'>
              <Sidebar title='Popular Posts' posts={this.state.popularPosts} borderColor='dodgerblue'/>
            </div>
          </div>
        </div>
    );

    }

}

export default Product;
