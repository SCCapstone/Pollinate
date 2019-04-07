import React, {Component} from 'react';
import './style.css';


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //grabbing the comments
    render() {
        let comments = this.props.comments || [];
        comments = comments.map(comment => {
            return (<div className='comment'>
                    <p>At {comment.created_at},{comment.author_name} commented: {comment.text}</p>
                    <label htmlFor="description"></label>
                    <div className="input-group mb-1">
                        <input id="commentSearch" type="text" className="form-control" placeholder="Comment..."
                               onInput={e => this.setState({search: e.target.value})}/>
                    </div>
                </div>
            )
        });

        //displaying the comments
        return (
            <div className='commentList'>
                {comments}
            </div>
        )


    }
}
export default Comments;
