import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    }
  }

  login() {
    this.props.Auth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { redirectToReferrer} = this.state

    if (redirectToReferrer === true) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div className="Login">
        <p>Login Here!</p>
        <button onClick={this.login.bind(this)}>Log In</button>
        <p>Don't have an account? Sign Up <Link to="/signup">Here</Link>!</p>
      </div>
    )
  }
}
