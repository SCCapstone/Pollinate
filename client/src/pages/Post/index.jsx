import React, {Component} from 'react';
import './style.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`/api/posts/${id}`, {credentials: "same-origin"})
            .then(res => res.json())
            .then(item => this.setState(item));
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

    /*//Store default state of upvote/downvote value
    getInitialState() {
        return {
            value: 0
        }
    }

    //Increment by one function
    addByOne() {
        this.setState({
            value: this.state.value + 1
        });
    }

    //Decrement by one function
    subtractByOne() {
        this.setState({
            value: this.state.value - 1
        });
    }*/

    render() {
        return (
            <div>
                <Item imgUrl={this.getImageUrl()} title={this.state.title} link={this.getLink()}
                      price={this.state.price} description={this.state.description}/>
            </div>
        );
    }
}

function Item(props) {
    return (
        <div id="item" className="col-s-12 col-lg-8">
            <div className="product">
                <div className="flex">
                    <div className="details mr-auto">
                        <h2 className="Name">{props.title}</h2>
                        <h3 className="price">${props.price}</h3>
                    </div>
                    <div id="productPhoto">
                        <img src={props.imgUrl} alt="" height="100"/>
                    </div>
                </div>
                <div className="divider"/>
                <div id="bottom">
                    <h4>Description</h4>
                    <p className="description">{props.description}</p>
                    <a className="btn btn-primary" rel="noopener noreferrer" target="_blank" href={props.link}>See
                        Deal</a>
                </div>
            </div>
        </div>
    );
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0, colorUp: 'secondary', colorDown: 'secondary', clicked: false
        };

        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
    }

    handleUp(event) {
        if (this.state.clicked === false) {
            this.setState({
                colorUp: 'success',
                clicked: true
            });
        }
    }

    handleDown(event) {
        if (this.state.clicked === false) {
            this.setState({
                colorDown: 'danger',
                clicked: true
            });
        }
    }

    increment = (e) => {
        e.preventDefault();
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleUpIncrement() {
        handleUp(event);
        increment(e);
    }

    decrement = (e) => {
        e.preventDefault();
        this.setState({
            counter: this.state.counter - 1
        });
    }

    handleDownDecrement() {
        handleDown(event);
        decrement(e);
    }

    render() {
        return (
            <div className="voting">
                {this.state.counter}
                <button className="upvoteBtn" type="submit" variant={this.state.colorUp}
                        onClick={this.handleUpIncrement()} disabled={this.state.clicked}>
                    <i className="fa fa-thumbs-up ml-2 mr-2"/>
                </button>
                <button className="downvoteBtn" type="submit"
                        onClick={this.handleDownDecrement()} disabled={this.state.clicked}>
                    <i className="fa fa-thumbs-down ml-2 mr-2"/>
                </button>
            </div>
        )
    }
}

export default Product;
