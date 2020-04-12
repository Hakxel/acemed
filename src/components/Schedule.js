import React from 'react'

function Schedule({t}) {
  return (
    <div id="schedule" className="home-component">
      <div className="p-grid p-align-center p-justify-center schedule-wrapper">
        <div className="p-col-12 p-md-10">
          <div className="p-grid p-align-center p-justify-center schedule-info">
            <div className="p-col-12 p-md-10 p-col-justify-center info-wrapper">
              <h2>{t('Schedule', 'Header')}</h2>
              <h3>{t('Schedule', 'Subheader')}</h3>
              <div className="p-grid p-justify-around p-align-center hours-wrapper">
                <div className="p-col-6 p-col-">
                  <h4>{t('Schedule', 'Days_1')}</h4>
                  <p>{t('Schedule', 'Hours_1')}</p>
                </div>
                <div className="p-col-6">
                  <h4>{t('Schedule', 'Days_2')}</h4>
                  <p>{t('Schedule', 'Hours_2')}</p>
                </div>
                <div className="p-col-6">
                  <h4>{t('Schedule', 'Days_3')}</h4>
                  <p>{t('Schedule', 'Hours_3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
