import React from 'react'
import ServiceCarousel from './ServiceCarousel'

function Services({t}) {

  return (
    <div id="services" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-6">
          <h2>{t('Services')}</h2>
        </div>
        <div className="p-col-10">
          <ServiceCarousel />
        </div>
      </div> 
    </div>
  )
}

export default Services
