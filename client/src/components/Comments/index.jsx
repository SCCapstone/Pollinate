import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import SimpleMDE from 'react-simplemde-editor';
import ReactMarkdown from 'react-markdown';
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

  static formattedDate(date) {
    return moment.utc(date).local().format('l, LT');
  }

  replyClicked(author) {
      this.setState({commentText: this.state.commentText + `@${author} `}, () => {
          this.state.editor.codemirror.focus();
          this.state.editor.codemirror.setCursor(Number.MAX_SAFE_INTEGER, 0);
      });
  }

  //grabbing the comments
  render() {
    let comments = this.props.comments || [];
    comments = comments.map(comment => {
      return (
          <div className='comment' key={comment.id}>
            <img width={'50px'} height={'50px'} className='mr-3'
                 src={comment.author_pic || "/static/images/no-image-icon.png"} alt="Profile Pic"/>
            <div style={{width: '100%'}}>
              <div className='commentHeader mb-1'>
                <Link className='commentHeaderText' to={`/profile/${comment.author_id}`}>{comment.author_name}</Link>
                <span className='commentHeaderText'>{Comments.formattedDate(comment.created_at)}</span>
              </div>
              <ReactMarkdown className='commentText' source={comment.text}/>
              {this.props.user && <button className='btn btn-link' onClick={() => this.replyClicked(comment.author_name)}>reply</button>}
            </div>
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
          <div className='m-3'>
            <SimpleMDE id="commentArea" value={this.state.commentText}
                       getMdeInstance={instance => this.setState({editor: instance})}
                       onChange={value => this.setState({commentText: value})} options={
                         {minHeight: '300px',
                         spellChecker: false,}
                       }/>
            <button id="postCommentBtn" type="button" className="btn btn-primary"
                    onClick={() => this.postComment()}>Post Comment
            </button>
          </div>}
        </div>
    )
  }
}

export default Comments;
