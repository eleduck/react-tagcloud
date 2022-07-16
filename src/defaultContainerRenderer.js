import React from 'react'

const defaultContainerRenderer = (props) => {
  const { children, ...other } = props
  return <div {...other}>{props.children}</div>
}

export default defaultContainerRenderer
