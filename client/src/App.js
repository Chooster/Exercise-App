import React, { Component } from 'react'
import * as Pages from './Pages'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated === true ?
    <Component {...props} /> : <Redirect to='/login' />
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={(props) => (
            <Pages.Home {...props} Auth={Auth} />
          )} />
          <Route path='/login' render={(props) => (
            <Pages.Login {...props} Auth={Auth} />
          )} />
          <Route path='/signup' render={(props) => (
            <Pages.Signup {...props} Auth={Auth} />
          )} />
          <PrivateRoute path='/workout' component={ Pages.Workout } />
          <PrivateRoute path='/logs' component={ Pages.Logs } />
        </div>
      </Router>
    );
  }
}

export default App;
