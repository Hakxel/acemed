import React from 'react'

function Logo() {
  const logo = require('../resources/Logo_green.png')
  return (
    <img className="logo-header" src={logo} />
  )
}

export default Logo  
