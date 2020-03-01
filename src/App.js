import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import './App.css';

export default class App extends Component {
  render() {  
    return (
      <div> 
        <Header />
        <Router>
          <Switch>
            <Route path = "/signin" component = {SignIn} />
            <Route path = "/signup" component = {SignUp} />
            <Route path = "/" component = {TodoList} />
          </Switch>
        </Router>
        {/* <Footer /> */}
      </div>
    )
  }
}
  