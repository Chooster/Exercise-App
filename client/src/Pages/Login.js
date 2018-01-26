import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../Actions'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    console.log(this.props)
    if (this.props.authenticated === true) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div className="Login">
        <h2>Login</h2>
        <form
          onSubmit={this.props.login(this.state.username, this.state.password)}
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
            Password:
             <input
               type="text"
               value={this.state.password}
               onChange={this.handlePassword}
             />
           </label>
           <input type="submit" value="Log In" />
        </form>

        <p>Don't have an account? Sign Up <Link to="/signup">Here</Link>!</p>
      </div>
    )
  }
}

const mapDispatchToProps = { login }

export default connect(null, mapDispatchToProps)(Login)
