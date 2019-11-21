/* eslint-disable no-unused-vars */
import React from 'react'
import './NCYC.css'
import Button from '@material-ui/core/Button'
import blue from '@material-ui/core/colors/blue'
import Pages from './Pages.js'
import SideBar from './SideBar.js'
import Clock from './Clock.js'
import Feed from './Feed.js'
// import { } from './pages.js'

const BACKGROUND_COLOR = blue[50]

const homeSidebar = [
  { name: 'Home', page: 'home' },
  { name: 'Feed', page: 'feed' }
]

const testBlobs = `[
{ "poster": "joe", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet mauris consequat, molestie nisi sit amet, tempus sem. Sed amet."},
{ "poster": "toby", "content": "Test Content"},
{ "poster": "jack", "content": "Test Content"}
]`

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
            <h1>Joe's NCYC App</h1>
            <p>Welcome to Joe's NCYC application! This is first of all a technical test of some interesting technology,
              but also a space for social interaction for NCYC attendees. This website was thrown together during the week
              before NCYC, so it is very imperfect and rough. I have tried to add some cool features to the website to
              encourage social interaction, like a Twitter-esque feed and a diocese poll. Please look around the site and
              talk to people!
            </p>
          </div>
        )
        break
      case 'feed':
        body = (
          <div className="feed-body">
            <h1>NCYC Feed</h1>
            <Feed blobs={ testBlobs }></Feed>
          </div>
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
