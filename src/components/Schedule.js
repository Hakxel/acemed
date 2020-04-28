import React from 'react'

function Schedule({t}) {
  return (
    <div id="schedule" className="home-component">
      <div className="p-grid p-align-center p-justify-center schedule-wrapper">
        <div className="p-col-12 p-md-10">
          <div className="p-grid p-align-center p-justify-center schedule-info">
            <div className="p-col-12 p-md-10 p-col-justify-center info-wrapper">
              <h2>{t('Schedule', 'Header')}</h2>
              {/* <h3>{t('Schedule', 'Subheader')}</h3> */}
              <div className="p-grid p-justify-around hours-wrapper">
                <div className="p-col-12 p-md-6">
                  <h4>{t('Schedule', 'Days_1')}</h4>
                  <div className="p-grid p-align-center">
                    <div className="p-col-12 schedule-hours">
                      <span>{t('Schedule', 'Mode_1')}</span>
                      <p>9:00 am - 4:00 pm</p>
                    </div>
                    <div className="p-col-12 schedule-hours">
                      <span>{t('Schedule', 'Mode_2')}</span>
                      <p>4:00 pm - 7:00 pm</p>
                    </div>
                  </div>
                </div>
                <div className="p-col-12 p-md-6">
                  <h4>{t('Schedule', 'Days_2')}</h4>
                  <div className="schedule-hours">
                    <span>{t('Schedule', 'Mode_2')}</span>
                    <p>10:00 am - 2:00 pm</p>
                  </div>
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
