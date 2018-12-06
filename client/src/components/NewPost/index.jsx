import React, { Component } from 'react';
import './style.css';


class NewPost extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {}
    }

    parseToBody() {
      const body = {};
      for (let key in this.state) {
        const value = this.state[key];
        if (value)
          body[key] = value;
      }
      return body;
    }

    //LogIn helper method
    createNewPost(e) {
      e.preventDefault();
      const body = this.parseToBody();
      fetch("https://pollinate-usc.herokuapp.com/api/posts", {method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
          .then(res => {
                console.log(res);
                if (res.status === 201)
                  this.props.history.push("/");
              }
          )
          .catch(err => console.error(err));
    }

    render() {
        return (
            <div id="NewPost">
              <div className="center">
                <h2 id="title">Create New Post</h2>
                <form id="NewPostForm" onSubmit={e => this.createNewPost(e)}>
                  <div className="input">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" required onInput={e => this.setState({title: e.target.value})}/>
                  </div>
                  <div className="input">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" required onInput={e => this.setState({price: e.target.value})}/>
                  </div>
                  <div className="input">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" name="imageUrl" onInput={e => this.setState({imageUrl: e.target.value})}/>
                  </div>
                  <div className="input">
                    <label htmlFor="link">Link</label>
                    <input type="text" name="link" required onInput={e => this.setState({link: e.target.value})}/>
                  </div>
                  <div className="input">
                    <label htmlFor="description">Description</label>
                    <textarea rows="4" maxLength="1000" name="description" onInput={e => this.setState({description: e.target.value})}/>
                  </div>
                  <div className="input">
                    <label htmlFor="category">Category</label>
                    <select name="category" required onInput={e => this.setState({category: e.target.value})}>
                      <option disabled selected value="" style={{display: "none"}}> -- select an option -- </option>
                      <option value="technology">Technology</option>
                      <option value="apparel">Apparel</option>
                      <option value="tools">Tools</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <input type="submit" value="Submit"/>
                </form>
              </div>
            </div>
        )
    }
}

export default NewPost;
