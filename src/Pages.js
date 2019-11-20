/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '@material-ui/core/Button'

function Pages (props) {
  var pages = props.pages.map((page, index) =>
    <Button key={index.toString()} color="primary" onClick={ () => props.callback(page) }>{ page.name }</Button>
  )
  return (
    <div className="Pages">
      { pages }
    </div>
  )
}

export default Pages
