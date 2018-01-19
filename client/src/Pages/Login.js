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

  login = () => {
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
        <h2>Login</h2>
        <form>
          Username: <input type="text" /><br />
          Password: <input type="text" />
        </form>
        <button onClick={() => this.login()}>Log In</button>
        <p>Don't have an account? Sign Up <Link to="/signup">Here</Link>!</p>
      </div>
    )
  }
}
