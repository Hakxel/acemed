import React from 'react'

function Logo() {
  const logo = require('../resources/Logo_green.png')
  return (
    <a href="/">
      <img className="logo-header" src={logo} alt="Ace Medical And Rehab Logo"/>
    </a>
  )
}

export default Logo  
