/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Feed extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }

    this.inputRef = React.createRef()
  }

  componentDidMount () {
    this.submit()
  }

  nameHandler (event) {
    this.setState({ nameState: event.target.value })
  }

  textHandler (event) {
    this.setState({ textState: event.target.value })
  }

  submit () {
    const xhttp = new XMLHttpRequest()
    xhttp.link = (text) => {
      this.setState({
        blobs: JSON.parse(text).map((blob, index) => {
          return <Blob className="Blob" key={ index } poster={ blob.name } content={ blob.text } />
        })
      })
      console.log(this.state)
    }
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        this.link(this.responseText)
      }
    }
    xhttp.open('GET', `http://127.0.0.1:2202?action=feed&name=${this.state.nameState}&text=${this.state.textState}`, true)
    xhttp.send()

    this.inputRef.current.value = ''
  }

  render () {
    return (
      <div className="Feed">
        <div className="blobs">
          { this.state.blobs }
        </div>
        <div className="post">
          <TextField
            id="name"
            label="Name:"
            variant="outlined"
            inputProps={ { onChange: this.nameHandler.bind(this) } }
          />
          <TextField
            id="blob"
            label="Text to Post:"
            variant="outlined"
            multiline
            rows="4"
            inputProps={ { onChange: this.textHandler.bind(this), ref: this.inputRef } }
          />
          <Button onClick={ this.submit.bind(this) }>Post Blob</Button>
        </div>
      </div>
    )
  }
}

class Blob extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.poster,
      text: props.content
    }
  }

  render () {
    return (
      <div className="Blob-content">
        <div className="Blob-name"><h6>{ this.state.name }</h6></div>
        <div className="Blob-text"><p>{ this.state.text }</p></div>
      </div>
    )
  }
}

export default Feed
