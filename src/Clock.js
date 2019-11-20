/* eslint-disable no-unused-vars */
import React from 'react'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.timer = setInterval(() => this.tick(), 50)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({ date: new Date() })
  }

  render () {
    return (
      <div className="Clock">
        The time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock
