import React, {Component} from 'react';
import './style.css';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {commentText: ''};
  }

  postComment() {
    const body = {postId: this.props.postId, text: this.state.commentText};
    const options = {
      credentials: "same-origin",
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    };
    console.log(body);
    fetch(`/api/comments`, options)
        .then(res => {
          if (res.ok) {
            window.location.reload();
          }
        })
  }

  formattedDate(date) {
    const d = new Date(date + ' UTC');
    return d.toLocaleString();
  }

  replyClicked(author) {
      this.setState({commentText: this.state.commentText + `@${author} `})
  }

  //grabbing the comments
  render() {
    let comments = this.props.comments || [];
    comments = comments.map(comment => {
      return (
          <div className='comment' key={comment.id}>
            <div className='commentHeader mb-1'>
              <span className='commentHeaderText'>{comment.author_name}</span>
              <span className='commentHeaderText'>{this.formattedDate(comment.created_at)}</span>
            </div>
            <p className='m-0'>{comment.text}</p>
            {this.props.user && <a href="#commentArea" onClick={() => this.replyClicked(comment.author_name)}>reply</a>}
          </div>
      )
    });

    //displaying the comments
    return (
        <div className='commentList mt-5'>
          <h4 id='commentsHeader'>Comments</h4>
          <div className='comments'>
            {comments}
          </div>
          {this.props.user &&
          <div className='bottomBorder'/>}
          {this.props.user &&
          <div>
            <div className="input-group mt-1">
            <textarea id="commentArea" className="form-control" placeholder="Comment..." value={this.state.commentText}
                      rows={4} onInput={e => this.setState({commentText: e.target.value})}/>
            </div>
            <button id="postCommentBtn" type="button" className="btn btn-primary"
                    onClick={() => this.postComment()}>Post Comment
            </button>
          </div>}
        </div>
    )
  }
}

export default Comments;
