import React from 'react'

function Logo({placement}) {
  
  const logo = {
    src: placement === 'header' ? require('../resources/Logo_green.png') :    require('../resources/Logo_light_blue.png'),
    class: placement === 'header' ? "logo-header" : "logo-footer"
  }
  return (
    <a href="/" className="logo-link">
      <img className={logo.class} src={logo.src} alt="Ace Medical And Rehab Logo"/>
    </a>
  )
}

export default Logo  
