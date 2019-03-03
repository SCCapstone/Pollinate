import React, { Component } from 'react';
import './style.css';
import auth from '../../utils/auth.js';

class EditProfile extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            error: {
                message: ''
            }
        }
    }

    componentDidMount() {
        fetch("/api/users/me", {credentials: "same-origin"})
            .then(res => res.json())
            .then(person => this.setState({person}));
        auth.getUser().then(user => this.setState({user}));
    }

    //editprofile helper method
    editprofile(e) {
        e.preventDefault();
        const body = {email: this.state.email, password: this.state.password, name: this.state.name,
            location: this.state.location, biography: this.state.biography, profileImgUrl: this.state.profileImgUrl};
        fetch("/api/users/me", {credentials: "same-origin", method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
            .then(
                (result) => {
                    console.log(result);
                    if (result.status === 201)
                        this.props.history.push("/home");
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div id="EditProfilePage">
                <h2 className="text-center mb-3">Edit Profile</h2>
                <form id="EditProfileForm" className="mx-auto" onSubmit={e => this.editprofile(e)}>
                    <label htmlFor="name">Name</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="name" required
                               value = {this.state.name}
                               onInput={e => this.setState({name: e.target.value})}/>
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="email" name="email" required
                               value = {this.state.email}
                               onInput={e => this.setState({email: e.target.value})}/>
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="password" name="password" required
                               value = {this.state.password}
                               onInput={e => this.setState({password: e.target.value})}/>
                    </div>

                    <label htmlFor="location">Location</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="location"
                               value = {this.state.location}
                               onInput={e => this.setState({location: e.target.value})}/>
                    </div>

                    <label htmlFor="biography">Biography</label>
                    <div className="input-group mb-1">
              <textarea className="form-control" name="biography" maxLength="1000" rows="4"
                        value = {this.state.biography}
                        onInput={e => this.setState({biography: e.target.value})}/>
                    </div>

                    <label htmlFor="profileImg">Profile Image Url</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="profileImg"
                               value = {this.state.profileImgUrl}
                               onInput={e => this.setState({profileImgUrl: e.target.value})}/>
                    </div>

                    <div className="input-group mt-3">
                        <input className="form-control btn btn-primary" type="submit" value="Submit"/>
                    </div>
                </form>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}
export default EditProfile;
