//import things that come from node modules first
import React, { Component } from 'react';
import axios from "axios";
import { FlexRow } from "../../styled-components/FlexContainers"
import {FlexColumn } from "../../styled-components/FlexContainers"
import styled from 'styled-components';

//import other components next
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm"

const LoginPageBody = styled.div`
margin-left: 5px;
`

class LoginPage extends Component {
    state = {
        users: []
    }

//we want to get API before anything renders, so we use componentWillMount
componentWillMount () {
    this.getAllUsers()
}


getAllUsers = async () => {
    //this will return a promise
    const response = await axios.get("/api/users")
    this.setState({users: response.data})
}
    render() {
        return (
            <LoginPageBody>
            <h1>Log-In</h1>
            <h3>Please Select an Existing User</h3>
            
            {this.state.users.map(user => {
              return (<div key={user._id} ><Link to={`/idea/${user._id}`}>{user.userName}</Link></div>)
            })} 
            <SignUpForm />
          </LoginPageBody>
        );
    }
}

export default LoginPage;