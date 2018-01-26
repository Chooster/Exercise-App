import React, { Component } from 'react'
import * as Pages from './Pages'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

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
            <Pages.Signup {...props} created={this.props.created} />
          )} />
          <Route path='/workout' render={(props) => (
            this.props.authenticated ?
              (<Pages.Workout {...props} authenticated={this.props.authenticated} />)
              : (<Redirect to='/' />)
          )} />
          <Route path='/logs' render={(props) => (
            this.props.authenticated ?
              (<Pages.Logs {...props} authenticated={this.props.authenticated} />)
              : (<Redirect to='/' />)
          )} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.login.authenticated,
    created: state.create.created
  }
}


export default connect(mapStateToProps)(App)
