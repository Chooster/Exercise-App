import React, { Component } from 'react'
import * as Pages from './Pages'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    this.props.authenticated ?
    <Component {...props} /> : <Redirect to='/login' />
  )} />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={(props) => (
            <Pages.Home {...props} authenticated={this.props.authenticated} />
          )} />
          <Route path='/login' render={(props) => (
            <Pages.Login {...props} authenticated={this.props.authenticated} />
          )} />
          <Route path='/signup' render={(props) => (
            <Pages.Signup {...props} authenticated={this.props.authenticated} />
          )} />
          <PrivateRoute path='/workout' component={ Pages.Workout } />
          <PrivateRoute path='/logs' component={ Pages.Logs } />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.login.authenticated }
}


export default connect(mapStateToProps)(App)
