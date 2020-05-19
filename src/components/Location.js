import React from 'react'
import {GMap} from 'primereact/gmap'


function Location() {

  const google = window.google

  const coord = {
    latitude: 25.771517,
    longitude: -80.261320
  }

  const mapOptions = {
    center: {lat: coord.latitude, lng: coord.longitude},
    zoom: 15
  }

  const marker = [
    new google.maps.Marker({position: {lat: coord.latitude, lng: coord.longitude}, title:"Ace Medical & Rehab Center"})
  ]

  const sendToNavigation = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${coord.latitude},${coord.longitude}`);
  }

  return (
    <div id="location" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-6">
          <address>3990 W Flagler St. Suite 102</address>
          <address>Coral Gables</address>
          <address>FL 33134</address>
          <address>Tel: 305 392 1143</address>
        </div>
      </div>
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-10 map-wrapper">
          <GMap options={mapOptions} overlays={marker} style={{width: '100%', minHeight: '550px'}} onOverlayClick={sendToNavigation}/>
        </div>
      </div>
    </div>
  )
}

export default Location
