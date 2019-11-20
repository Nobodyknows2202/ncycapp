/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@material-ui/core/Button'
import Pages from './Pages.js'

class SideBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pages: props.pages,
      label: props.label,
      callback: props.callback
    }
  }

  transferPageRequest (page) {
    this.state.callback(page)
  }

  render () {
    return (
      <div className="SideBar">
        <div className="SideBar-label">
          { this.state.label }
        </div>
        <Pages pages={this.state.pages} callback={ this.transferPageRequest.bind(this) }></Pages>
      </div>
    )
  }
}

export default SideBar
