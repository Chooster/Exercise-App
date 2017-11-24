import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    }
  }


  render() {
    return (
      <div className="Signup">
        <p>Already have an account? Log In <Link to='/login'>Here</Link></p>
      </div>
    )
  }
}
