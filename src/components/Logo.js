import React from 'react'

function Logo() {
  const logo = require('../resources/Logo.png')
  return (
    <div className="p-grid p-justify-center">
      <img className="p-col logo-img" src={logo} />
    </div>
  )
}

export default Logo  
