import React, {Component} from 'react';
import './style.css';


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let comments = this.props.comments || [];
        comments = comments.map(comment => {
            return (<div className='comment'>
                    <p>{comment.text}</p>
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
