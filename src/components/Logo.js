import React from 'react'

function Logo() {
  const logo = require('../resources/Logo_green.png')
  return (
    <img className="logo-img" src={logo} />
  )
}

export default Logo  
