import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../Pages/Login/index'
import HomePage from '../Pages/HomePage'

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
      </HashRouter>
    )
  }
}
