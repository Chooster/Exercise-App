import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state =  {
      authed: this.props.Auth
    }
  }

  render() {
    const { authed } = this.state
    if (authed === true) {
      return (
        <div>
          <h2>Welcome back!</h2>
          <p><Link to='/workout'>Workout</Link></p>
          <p><Link to='/logs'>Logs</Link></p>
        </div>
      )
    }

    return (
      <div className="Home">
        <h2>Welcome to the Exercise App!</h2>
        <p>Time your workouts and keep track of your progression</p>
        <p><Link to="/Login">Sign In</Link></p>
        <p>Or</p>
        <p><Link to="/signup">Create Account</Link></p>
      </div>
    )
  }
}
