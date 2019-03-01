import React, {Component} from 'react';
import './style.css';
import VoteCounter from "../../components/VoteCounter";
import auth from '../../utils/auth.js';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {};
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

    deletePost(){
        if (window.confirm("Are you sure you want to delete this post?")) {
        fetch(`/api/posts/${this.state.id}`, {credentials: "same-origin", method: 'delete', headers: {'Content-Type': 'application/json'}})
            .then(res => {
                if(res.ok) {
                    this.props.history.push("/");
                }
            })
        }
    }

    render() {
        return(
            <div>
              <Item imgUrl={this.getImageUrl()} title={this.state.title} link={this.getLink()} author={this.state.author}
                    price={this.state.price} description={this.state.description} deletePost={() => this.deletePost()}
                    user={this.state.user} postId={this.state.id}/>
            </div>
        );
    }
}

function Item (props){
    return (
        <div id="item" className="col-s-12 col-lg-8">
            <div className="product">
              <div className="flex">
                <div className="details mr-auto">
                  <h2 className="Name">{props.title}</h2>
                  <h3 className="price">${props.price}</h3>
                  {props.postId && <VoteCounter postId={props.postId}/>}
                </div>
                <div id="productPhoto">
                  <img src={props.imgUrl} alt="" height="100"/>
                </div>
              </div>
              <div className="divider"/>
              <div id="bottom">
                <h4>Description</h4>
                <p className="description">{props.description}</p>
                {props.link &&
                <a className="btn btn-primary mr-3" rel="noopener noreferrer" target="_blank" href={props.link}>See Deal</a>}
                {props.user && props.user.id === props.author &&
                <button id="deletePostBtn" type="button" className="btn btn-danger" onClick={ () => props.deletePost() }>Delete</button>}
              </div>
            </div>
        </div>
    );
}

export default Product;
