import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HomePage from "./components/home/HomePage"
import LogInPage from "./components/login/LogInPage"
import IdeaPage from "./components/idea/IdeaPage"
// import { FlexRow } from "/styled-components/FlexContainers"
// import { FlexColumn } from "/styled-components/FlexContainers"
import styled from 'styled-components';

const LinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 90%;
  font-size: 14px;
`

const HeadLink = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <LinkDiv>
          <HeadLink><Link to="/">Home</Link></HeadLink>
          <HeadLink><Link to="/login">Login</Link></HeadLink>
          <HeadLink><Link to="/idea">Idea</Link></HeadLink>
          </LinkDiv>
          <Switch>
           <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/idea/:userId" component={IdeaPage} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
