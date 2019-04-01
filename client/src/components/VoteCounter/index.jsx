import React, {Component} from 'react';
import './style.css';

class VoteCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

    componentDidMount() {
        fetch(`/api/likes/${this.props.postId}`, {credentials: "same-origin"})
            .then(res => res.json())
            .then(votes => {
                // Filters out votes that weren't made by the logged in user, then checks if that array's length is !== 0
                const userVoted = votes.filter(vote => vote.userId === this.props.userId).length !== 0;
                this.setState({userVoted, clicked: userVoted, counter: votes.length});
            });
  }

  like() {
    fetch(`/api/likes/${this.props.postId}`, {credentials: "same-origin", method: 'post'}).then(res => {
      if (res.ok) {
        this.setState({counter: this.state.counter + 1, clicked: true});
      }
    })
  }

  render() {
    const btnClass = 'btn ' + (this.state.clicked ? 'btn-primary' : 'likeBtn');

    return (
      <div className='voting'>
        <h6 className='mr-2 mb-0'>Deal Score: {this.state.counter}</h6>
        {this.props.userId && this.state.userVoted !== undefined &&
        <button className={btnClass} onClick={() => this.like()} disabled={this.state.clicked}>
          <i className="fa fa-star"/>
        </button>}
      </div>
    )
  }
}

export default VoteCounter;
