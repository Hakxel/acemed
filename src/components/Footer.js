import React from 'react'

function Footer() {
  return (
    <div id="footer">
      <div className="p-grid p-justify-center footer-wrapper">
        <div className="p-col-12 p-md-10">
          <div className="p-grid p-justify-even footer-content">
            <div className="p-col-12 p-md-4">
              <div className="p-grid p-justify-start footer-item">
                <a href="https://www.facebook.com/Ace-Medical-Rehab-Center-337582687177448/" target="_blank" rel="noopener"><i className="fab fa-3x fa-facebook-square"></i></a>
              </div>
            </div>
            <div className="p-col-12 p-md-4">
              <div className="p-grid p-justify-center footer-item">
                <a href="/"><img className="logo-footer" src={require('../resources/Logo_light_blue.png')} alt="Ace Medical And Rehab Logo"></img></a>
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
