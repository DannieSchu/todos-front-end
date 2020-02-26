import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import TodoList from './Components/TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route path = "/" component = {TodoList} />
          </Switch>
        </Router>
      </div>
    )
  }
}
