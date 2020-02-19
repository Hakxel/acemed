import React from 'react'
import {Parallax, Background} from 'react-parallax'
import {Button} from 'primereact/button'
import Navigation from '../components/Navigation'

function Hero({t}) {
 const handleAppointment= () => {
    alert("Book appointment clicked")
  }

  const introImg = require('../resources/intro-nurse.jpg')
  
  return (
    <div id="hero">
      <Parallax blur={0} bgImage={introImg} bgImageAlt="Physiotherapist stretching leg of patient" strength={300} >
      <div>
        <Navigation />
      </div>
        <div className="hero-content">
          <div className="p-grid p-dir-col p-align-center p-justify-center">
            <h1 className="p-col-6 hero-text">{t('Welcome')}</h1>
            <Button label={t('Appointment')} className="p-col-6 hero-appointment p-button-secondary p-button-raised" onClick={handleAppointment}/>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero
