import React, { Component } from 'react';
import './style.css';

class EditProfile extends Component {
    //Creating a state for our react class
    constructor(props) {
        super(props);
        this.state = {
            error: {
                message: ''
            }
        }
    }

    componentDidMount() {
        fetch("/api/users/me", {credentials: "same-origin"})
            .then(res => res.json())
            .then(me => this.setState({me}))

    }

    //editprofile helper method
    editprofile(e) {
        e.preventDefault();
        const body = {email: this.state.email, password: this.state.password, name: this.state.name,
            location: this.state.location, biography: this.state.biography, profileImgUrl: this.state.profileImgUrl};
        fetch("/api/user/me", {credentials: "same-origin", method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
            .then(
                (result) => {
                    console.log(result);
                    if (result.status === 201)
                        this.props.history.push("/login");
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
                <h2 className="text-center mb-3">Join Pollinate</h2>
                <form id="EditProfileForm" className="mx-auto" onSubmit={e => this.editprofile(e)}>
                    <label htmlFor="name">Name</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="name" required
                               onInput={e => this.setState({name: e.target.value})}/>
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="email" name="email" required
                               onInput={e => this.setState({email: e.target.value})}/>
                    </div>

                    <label htmlFor="password">Password</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="password" name="password" required
                               onInput={e => this.setState({password: e.target.value})}/>
                    </div>

                    <label htmlFor="location">Location</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="location"
                               onInput={e => this.setState({location: e.target.value})}/>
                    </div>

                    <label htmlFor="biography">Biography</label>
                    <div className="input-group mb-1">
              <textarea className="form-control" name="biography" maxLength="1000" rows="4"
                        onInput={e => this.setState({biography: e.target.value})}/>
                    </div>

                    <label htmlFor="profileImg">Profile Image Url</label>
                    <div className="input-group mb-1">
                        <input className="form-control" type="text" name="profileImg"
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
