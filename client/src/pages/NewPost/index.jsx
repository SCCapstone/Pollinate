import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import './style.css';


class NewPost extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {};
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
      fetch("/api/posts", {credentials: "same-origin", method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
          .then(res => {
                console.log(res);
                if (res.status === 201)
                  this.props.history.push("/");
              }
          )
          .catch(err => console.error(err));
    }

    isPriceValid(e) {
      if(/^[0-9]*([.][0-9]*)?$/.test(e.target.value)) {
        this.setState({price: e.target.value});
        e.target.setCustomValidity("");
      }
      else
        e.target.setCustomValidity("Must be a number");
    }

    render() {
        return (
            <div id="NewPost">
              <div className="center">
                <h2 id="title">Create New Post</h2>
                <form id="NewPostForm" onSubmit={e => this.createNewPost(e)}>
                  <label htmlFor="title">Title *</label>
                  <div className="input-group mb-1">
                    <input className="form-control" type="text" name="title" required
                           onInput={e => this.setState({title: e.target.value})}/>
                  </div>
                  <label htmlFor="price">Price *</label>
                  <div className="input-group mb-1">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input className="form-control" type="text" name="price" required
                           onInput={e => this.isPriceValid(e)}/>
                  </div>
                  <label htmlFor="imageUrl">Image Url</label>
                  <div className="input-group mb-1">
                    <input className="form-control" type="text" name="imageUrl"
                           onInput={e => this.setState({imageUrl: e.target.value})}/>
                  </div>
                  <label htmlFor="link">Link *</label>
                  <div className="input-group mb-1">
                    <input className="form-control" type="text" name="link" required
                           onInput={e => this.setState({link: e.target.value})}/>
                  </div>
                  <label htmlFor="description">Description</label>
                  <SimpleMDE  name="description"
                              onChange={value => this.setState({description: value})} options={
                                {minHeight: '300px', spellChecker: false}
                  }/>
                  <label htmlFor="category">Category *</label>
                  <div className="input-group mb-1">
                    <select className="form-control" name="category" required
                            onInput={e => this.setState({category: e.target.value})}>
                      <option disabled selected value="" style={{display: "none"}}> -- select an option -- </option>
                      <option value="technology">Technology</option>
                      <option value="apparel">Apparel</option>
                      <option value="tools">Tools</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <label htmlFor="expires_at">Expires</label>
                  <div className="input-group mb-1">
                    <input className="form-control" type="date" name="expires_at" min={new Date().toISOString().split("T")[0]}
                           onInput={e => this.setState({expires_at: e.target.value})}/>
                  </div>
                  <div className="input-group mt-4">
                    <input className="form-control btn btn-primary" type="submit" value="Submit"/>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}

export default NewPost;
