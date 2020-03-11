import React from 'react'

function outputView (props) {
  return (
    <textarea readOnly value={props.value} />
  )
}

export default outputView
