import React from 'react'

function Schedule() {
  return (
    <div id="schedule" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-10">
          <div className="p-grid p-align-center p-justify-center schedule-info">
            <div className="p-col-12 p-col-justify-center schedule-wrapper">
              <h2>Clinic Hours</h2>
              <h3>Here when you need us</h3>
              <div className="p-grid p-justify-around p-align-center">
                <div className="p-col-6 p-col-">
                  <h4>Mon - Wed - Fri</h4>
                  <p>8:00 am - 5:00 pm</p>
                </div>
                <div className="p-col-6">
                  <h4>Tue - Thu</h4>
                  <p>9:00 am - 6:00 pm</p>
                </div>
                <div className="p-col-6">
                  <h4>Sat</h4>
                  <p>10:00 am - 4:00 pm</p>
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
