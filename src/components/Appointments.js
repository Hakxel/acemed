import React from 'react'

function Appointments() {
  return (
    <div id="appointments">
      <div className="p-grid p-justify-center p-nogutter">
        <div className="p-col-12 p-md-10 booking-wrapper">
          <iframe title="booking" src="https://acemedicalrehab.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframeacemedicalrehab" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Appointments
