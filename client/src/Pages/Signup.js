import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createAccount } from '../Actions'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    }
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createAccount(this.state.username, this.state.password, this.state.email)
  }

  render() {
    console.log(this.props)
    if (this.props.created === true) {
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div className="Signup">
        <h2>Sign Up</h2>
        <form
          onSubmit={this.handleSubmit}
        >
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
          <label>
            E-mail:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </label>
          <label>
            Password:
             <input
               type="text"
               value={this.state.password}
               onChange={this.handlePassword}
             />
           </label>
           <label>
             Confirm Password:
              <input
                type="text"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPassword}
              />
            </label>
            <input type="submit" value="Create Account" />
        </form>
        <p>Already have an account? Log In <Link to='/login'>Here</Link></p>
      </div>
    )
  }
}

const mapDispatchToProps = { createAccount }

export default connect(null, mapDispatchToProps)(Signup)
