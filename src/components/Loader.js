import React from 'react'
import {ProgressSpinner} from 'primereact/progressspinner'

function Loader() {
  return (
    <div className="p-grid p-justify-center p-align-center loader">
      <ProgressSpinner style={{width: '10rem', height: '10rem'}} strokeWidth="4" fill="#EEEEEE" animationDuration="2s"/>
    </div>
  )
}

export default Loader
