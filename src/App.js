import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Footer from './Components/Footer';
// import PrivateRoute from './Components/PrivateRoute';
import './App.css';

export default class App extends Component {
  // state = { user: null };
  // setUser = (user) => {
  //   this.setState({ user: user.body })
  // }

  render() {  
    return (
      <div> 
        <Header />
        <Router>
          <Switch>
            <Route path="/signin" component={SignIn} />
            {/* <Route path = "/signin" render={(props) => <SignIn {...props} setUser={ this.setUser } user={this.state.user }/>} /> */}
            <Route path="/signup" component={SignUp} />
            {/* <Route path = "/signup" render={(props) => <SignUp {...props} setUser={ this.setUser } user={this.state.user }/>} /> */}
            {/* <Route path = "/" component={TodoList} user={this.state.user} /> */}
            <Route path="/" component={TodoList} />
            {/* <PrivateRoute exact path = "/" component = {TodoList} user={this.state.user} /> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
  