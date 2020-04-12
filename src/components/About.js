import React from 'react'

function About({t}) {
  return (
    <div id="about" className="home-component">
      <div className="p-grid p-justify-center about-container">
        <div className="p-col-12 p-md-5 about-panel panel-left">
        </div>
        <div className="p-col-10 p-md-5 about-panel panel-right">
          <div className="p-grid">
            <div className="p-col-12 p-col-align-center">
              <h2>{t('About', 'Header')}</h2>
              <p>{t('About', 'Content_1')}</p>
              <p>{t('About', 'Content_2')}</p>
            </div>
          </div>  
        </div>
      </div>
      
    </div>
  )
}

export default About
