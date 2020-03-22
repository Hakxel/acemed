import React from 'react'
import ServiceCarousel from './ServiceCarousel'

function Services({t}) {

  return (
    <div id="services" className="home-component">
      <div className="p-grid p-justify-center">
      <div className="services-wrapper p-col-12">
          <div className="p-grid p-justify-center">
            <h2>{t('Services')}</h2>
          </div>
          <div className="p-grid p-justify-center">
            <ServiceCarousel />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Services
