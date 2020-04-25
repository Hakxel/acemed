import React from 'react'
import {GMap} from 'primereact/gmap'


function Location() {

  const google = window.google

  const mapOptions = {
    center: {lat: 25.771686, lng: -80.261349},
    zoom: 15
  }

  const marker = [
    new google.maps.Marker({position: {lat: 25.771517, lng: -80.261320}, title:"Ace Medical & Rehab Center"})
  ]
  
  return (
    <div id="location" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-6">
          <address>3990 W Flager St. Suite 102</address>
          <address>Coral Gables</address>
          <address>FL 33134</address>
          <address>Tel: 305 392 1143</address>
        </div>
      </div>
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-10 map-wrapper">
          <GMap options={mapOptions} overlays={marker} style={{width: '100%', minHeight: '550px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Location
