import React from 'react'
import {GMap} from 'primereact/gmap'


function Location() {

  const google = window.google

  const mapOptions = {
    center: {lat: 25.7719586, lng: -80.2534177},
    zoom: 15
  }

  const marker = [
    new google.maps.Marker({position: {lat: 25.7719586, lng: -80.2534177}, title:"Ace Medical & Rehab Center"})
  ]
  
  return (
    <div id="location" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-10">
          <GMap options={mapOptions} overlays={marker} style={{width: '100%', minHeight: '450px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Location
