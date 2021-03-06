import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import './style.css';
import auth from '../../utils/auth.js';
import {enforceMaxLength} from "../../utils/helper";

/*
This is our edit profile page that displays the profile of a user available to edit
*/

class EditProfile extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {}
    }
    //This method ensures the user is correct before allowing to edit
    componentDidMount() {
        auth.getUser().then(user => this.setState(user));
    }

    //This method set the base values for the page, pulling the previous states and setting them
    editprofile(e) {
        e.preventDefault();
        const body = {name: this.state.name, location: this.state.location, biography: this.state.biography,
            profileImgUrl: this.state.profileImgUrl};
        fetch("/api/users/me", {credentials: "same-origin", method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
            .then((result) => {
                    if (result.ok)
                        this.props.history.push("/");
                })
    }
    //This method renders the profile and updates the states based on the edit
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

                    <label htmlFor="location">Location</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="location"
                               value = {this.state.location}
                               onInput={e => this.setState({location: e.target.value})}/>
                    </div>

                    <label htmlFor="biography">Biography</label>

              <SimpleMDE name="biography" value={this.state.biography}
                         getMdeInstance={(i) => i.codemirror.setOption("maxLength", 1000)}
                         onChange={value => this.setState({biography: value})} options={
                           {minHeight: '300px', spellChecker: false}} events={{beforeChange: enforceMaxLength}}/>

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
            </div>
        )
    }
}
export default EditProfile;
