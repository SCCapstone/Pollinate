import React, { Component } from 'react';
import moment from 'moment';
import SimpleMDE from 'react-simplemde-editor';
import './style.css';
import {enforceMaxLength} from "../../utils/helper";


class EditDeal extends Component {
    //Creating a state for our react class
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

    parseToBody() {
        const body = {title: this.state.title, price: this.state.price, imageUrl: this.state.imageUrl, link: this.state.link,
            description: this.state.description, category: this.state.category, expires_at: this.state.expires_at};
        for (let key in this.state) {
            const value = this.state[key];
            if (value)
                body[key] = value;
        }
        return body;
    }

    //LogIn helper method
    editDeal(e) {
        e.preventDefault();
        const body = this.parseToBody();
        fetch(`/api/posts/${this.state.id}`, {credentials: "same-origin", method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
            .then(res => {
                    console.log(res);
                    if (res.status === 200)
                        this.props.history.push(`/post/${this.state.id}`);
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
            <div id="EditDeal">
                <div className="center">
                    <h2 id="title">Edit Deal</h2>
                    <form id="EditDealForm" onSubmit={e => this.editDeal(e)}>
                        <label htmlFor="title">Title *</label>
                        <div className="input-group mb-1">
                            <input className="form-control" type="text" name="title" required
                                   value = {this.state.title || ''}
                                   onChange={e => this.setState({title: e.target.value})}/>
                        </div>
                        <label htmlFor="price">Price *</label>
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input className="form-control" type="text" name="price" required
                                   value = {this.state.price || ''}
                                   onChange={e => this.isPriceValid(e)}/>
                        </div>
                        <label htmlFor="imageUrl">Image Url</label>
                        <div className="input-group mb-1">
                            <input className="form-control" type="text" name="imageUrl"
                                   value = {this.state.imageUrl || ''}
                                   onChange={e => this.setState({imageUrl: e.target.value})}/>
                        </div>
                        <label htmlFor="link">Link *</label>
                        <div className="input-group mb-1">
                            <input className="form-control" type="text" name="link" required
                                   value = {this.state.link || ''}
                                   onChange={e => this.setState({link: e.target.value})}/>
                        </div>
                        <label htmlFor="description">Description</label>
                        <SimpleMDE name="description" value = {this.state.description || ''}
                                   getMdeInstance={(i) => i.codemirror.setOption("maxLength", 5000)}
                               onChange={value => this.setState({description: value})} options={
                                   {minHeight: '300px', spellChecker: false}} events={{beforeChange: enforceMaxLength}}/>
                        <label htmlFor="category">Category *</label>
                        <div className="input-group mb-1">
                            <select className="form-control" name="category" required
                                    value = {this.state.category || ''}
                                    onChange={e => this.setState({category: e.target.value})}>
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
                                   value={this.state.expires_at ? moment(this.state.expires_at).toISOString().split("T")[0] : ''}
                                   onChange={e => this.setState({expires_at: e.target.value})}/>
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

export default EditDeal;
