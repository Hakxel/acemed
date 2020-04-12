import React from 'react'

function Footer() {
  return (
    <div id="footer">
      <div className="p-grid p-justify-center footer-wrapper">
        <div className="p-col-12 p-md-10">
          <div className="p-grid p-justify-even footer-content">
            <div className="p-col-12 p-md-4">
              <div className="p-grid p-justify-start footer-item">
                <i className="fab fa-3x fa-facebook-square"></i>
              </div>
            </div>
            <div className="p-col-12 p-md-4">
              <div className="p-grid p-justify-center footer-item">
                <img className="logo-footer" src={require('../resources/Logo_light_blue.png')}></img>
              </div>
            </div>
            <div className="p-col-12 p-md-4">
              <div className="p-grid p-justify-end footer-item">
                <p>&copy; Ace Medical & Rehab, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
