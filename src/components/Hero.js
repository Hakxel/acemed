import React from 'react'
import {Parallax, Background} from 'react-parallax'
import {Button} from 'primereact/button'
import ToggleLanguage from './ToggleLanguage'

function Hero({t}) {
 const handleAppointment= () => {
    alert("Book appointment clicked")
  }

  const introImg = 'https://ik.imagekit.io/hakxelimgs/shutterstock_648345937_S-I3SSn3O.jpg'
  
  return (
    <div id="hero" className="home-component p-grid p-justify-center">
      <div className="p-col-12 p-md-10">
        <Parallax blur={0} bgImage={introImg} bgImageAlt="Physiotherapist stretching leg of patient" strength={300}>
          <div className="hero-content p-grid">
            <div className="p-col-12">
              <div className="p-grid p-justify-center hero-wrapper">
                  <div className="p-col-12">
                    <ToggleLanguage />
                  </div>
                  <div className="p-col-12 p-md-10 p-col-align-center">
                    <div className="p-grid p-justify-center hero-text-wrapper">
                      <h1 className="p-col">{t('Hero', 'Welcome')}</h1>
                    </div>
                  </div>
                  <div className="p-col-12 p-col-align-center">
                    <div className="p-grid p-justify-center">
                      <button  className="hero-appointment">{t('Hero', 'BookNow')}</button>
                    </div>
                  </div>
                
                
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default Hero
