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
    <div className="home-component contact">
      <div className="p-grid">
        <div className="p-col-10 p-col-md-6 p-offset-1">
          <div className="contact-header p-grid p-justify-center p-align-center p-nogutter">
            <h2 className="p-col-8">{t('ContactHeader')}</h2>
          </div>
        </div>
        <div className="p-col-10 p-col-md-6 p-offset-1 contact-form">
          <form onSubmit={(e) => handleContactSubmit(e)}>
            <div className="p-grid p-fluid">
              <div className="p-col-12 form-field">
                <span className="p-float-label">
                  <InputText id="userName" />
                  <label htmlFor="userName">{t('ContactName')}</label>
                </span>
              </div>
              <div className="p-col-12 form-field">
                <span className="p-float-label">
                  <InputText id="userEmail" />
                  <label htmlFor="userEmail">{t('ContactEmail')}</label>
                </span>
              </div>
              <div className="p-col-12 form-field">
                <span className="p-float-label">
                  <InputTextarea id="userMessage" />
                  <label htmlFor="userMessage">{t('ContactMessage')}</label>
                </span>
              </div>
              <div className="p-col-4 p-offset-8">
                <Button label={t('ContactSubmit')} icon="fas fa-paper-plane" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
