import React, { Component } from 'react';
import axios from "axios"

class SignUpForm extends Component {

    state = {
        newUser: {
            userName: "",
            password: ""
        }
    }

    //if cloning object use {...this} and if cloning an array use [...this]
    //and newUser updates
    // this.setState({})
    //use this as a model for any time you need to update multiple fields within form, etc.
    handleChange = (event) => {
        // console.log(event.target.name)
        const attribute = event.target.name
        const updateUser = { ...this.state.newUser }

        //next line uses "bracket syntax" - alternative way of writing out an object. allows us to dynamically choose different keys within that object
        updateUser[attribute] = event.target.value

        console.log(updateUser);
        console.log("changed!");
        //every time we make a change, this.setState happens
        this.setState({ newUser: updateUser })
    }

    handleSubmit = async (event) => {
        //prevent default refresh
        event.preventDefault()
        //axios post requests take second request: thing that is being sent over
        const response = await axios.post("/api/users", {
            "user": this.state.newUser
        })
        console.log(response)
    }

    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="userName">User Name: </label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.newUser.userName} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.newUser.password} />
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;