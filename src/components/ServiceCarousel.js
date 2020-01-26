import React, {useState, useContext} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import {Carousel} from 'primereact/carousel'
import {Card} from 'primereact/card'
import ServicesList from '../data/services.json'

function ServiceCarousel() {

  const {t} = useContext(LanguageContext)
  const serviceList = ServicesList.allServices
  const serviceTemplate = (serviceData) => {
    return (
      <div className="service-details">
        <Card 
          title={t('ServiceName', `${serviceData.key}`)} 
          header={cardHeader(serviceData)}
          className="service-card"
          >
            {t('ServiceDescrip', `${serviceData.key}`)}
        </Card>
      </div>
    )
  }
  const cardHeader = (headData) => {
    return (
      <img src={headData.url} alt={t('ServiceAlt', `${headData.key}`)}/>
    )
  }

  const responsiveOptions = [
    {
      breakpoint: '2048px',
      numVisible: 3,
      numScroll: 1
    },
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];



  return (
    <div>
      <Carousel
        value={serviceList} 
        itemTemplate={serviceTemplate}
        responsiveOptions={responsiveOptions}
        autoplayInterval={4000}
        />
    </div>
  )
}

export default ServiceCarousel
