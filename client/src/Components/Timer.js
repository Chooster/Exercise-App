import React, { Component } from 'react'

export default class extends Component {
  constructor() {
    super()

    this.state = {
      timer: null,
      prevTimer: null,
      hours: 0,
      minutes: 0,
      seconds: 0,
      started: false
    }
  }

  formattedSeconds() {
    let formattedString = ''
    if (this.state.seconds >= 60) {
      this.setState({ seconds: 0 })
      this.setState({ minutes: this.state.minutes + 1 })
      if (this.state.minutes >= 60) {
        this.setState({ minutes: 0 })
        this.setState({ hours: this.state.hours + 1 })
      }
    }
    if (this.state.hours < 10) formattedString += '0'
    formattedString += `${this.state.hours}:`
    if (this.state.minutes < 10) formattedString += '0'
    formattedString += `${this.state.minutes}:`
    if (this.state.seconds < 10) formattedString += '0'
    formattedString += `${this.state.seconds}`
    return formattedString
  }

  start() {
    if (this.state.started === false) {
      this.setState({ started: true })
      this.setState({
        timer:
        setInterval(() => {
          this.setState({
            seconds: this.state.seconds + 1
          })
        }, 1000)
      })
    }
  }

  stop() {
    this.setState({ started: false })
    clearInterval(this.state.timer)
    this.setState({ prevTimer: this.state.timer })
  }

  reset() {
    this.setState({ started: false })
    clearInterval(this.state.timer)
    this.setState({ seconds: 0, minutes: 0, hours: 0 })
  }

  render() {
    return (
      <div>
        <p>{this.formattedSeconds()}</p>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}
