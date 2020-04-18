import React from 'react'
import {InputText} from 'primereact/inputtext'
import {InputTextarea} from 'primereact/inputtextarea'
import {Button} from 'primereact/button'

function Contact({t}) {

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted')
  }


  return (
    <div id="contact" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-10 p-lg-8">
          <div className="contact-header p-grid p-justify-center p-align-center p-nogutter">
            <h2 className="p-col-8">{t('Contact', 'Header')}</h2>
          </div>
        </div>
        <div className="p-col-12 p-md-10 contact-form">
          <form onSubmit={(e) => handleContactSubmit(e)}>
            <div className="p-grid p-justify-center p-fluid p-nogutter">
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputText id="userName" />
                  <label htmlFor="userName">{t('Contact', 'Name')}</label>
                </span>
              </div>
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputText id="userEmail" />
                  <label htmlFor="userEmail">{t('Contact', 'Email')}</label>
                </span>
              </div>
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputTextarea id="userMessage" />
                  <label htmlFor="userMessage">{t('Contact', 'Message')}</label>
                </span>
              </div>
              <div className="p-col-12 p-md-8">
                <div className="p-col-4 p-offset-8 submit-button">
                  <Button label={t('Contact', 'Submit')} icon="fas fa-paper-plane" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
