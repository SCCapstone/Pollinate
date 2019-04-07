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
