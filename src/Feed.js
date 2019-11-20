/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Feed extends React.Component {
  constructor (props) {
    super(props)
    this.state = { blobs: props.blobs }
  }

  render () {
    return (
      <div className="Feed">
        <div className="blobs">

        </div>
        <div className="post">
          <TextField
            id="name"
            label="Name:"
            variant="outlined"
          />
          <TextField
            id="blob"
            label="Text to Post:"
            variant="outlined"
            multiline
            rows="4"
          />
          <Button>Post Blob</Button>
        </div>
      </div>
    )
  }
}

export default Feed
