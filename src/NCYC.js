/* eslint-disable no-unused-vars */
import React from 'react'
import './NCYC.css'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import Pages from './Pages.js'
import SideBar from './SideBar.js'
import Clock from './Clock.js'
// import { } from './pages.js'

const BACKGROUND_COLOR = blue[50]

const homeSidebar = [
  { name: 'Home', page: 'home' },
  { name: 'Test', page: 'test' }
]

const homeButtons = [
  { name: 'Go Home', page: 'home' },
  { name: 'Next Link', page: 'test' }
]

class NCYC extends React.Component {
  constructor (props) {
    super(props)
    this.state = { page: 'home' }
    this.testid = true
  }

  changePage (page) {
    this.setState({ page: page.page })
  }

  render () {
    let body
    switch (this.state.page) {
      case 'home':
        body = (
          <div className="body">
            <Pages pages={ homeButtons } callback={ this.changePage.bind(this) }></Pages>
            <Clock></Clock>
          </div>
        )
        break
      case 'test':
        body = (
          <p>Test Succeeded!</p>
        )
        break
      default:
        console.log('Invalid Page!')
        body = <p>Invalid Page!!!</p>
    }
    return (
      <div className="App">
        <SideBar label="Home" pages={ homeSidebar } callback={ this.changePage.bind(this) }></SideBar>
        { body }
      </div>
    )
  }
}

export default NCYC
