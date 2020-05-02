import React, {useState} from 'react'
import {InputText} from 'primereact/inputtext'
import {InputTextarea} from 'primereact/inputtextarea'
import {Button} from 'primereact/button'
import {useToasts} from 'react-toast-notifications'
import * as emailjs from 'emailjs-com'

function Contact({t}) {

  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderMessage, setSenderMessage] = useState('')

  const emailParams = {
    user_Id: "user_4cNIsVKI69cQQSwT6hDz0",
    service_Id: "gmail",
    template_Id: "aceform1"
  }

  const templateData = {
    "from_name": senderName,
    "reply_to": senderEmail,
    "message_body": senderMessage
  }

  const resetState = () => {
    setSenderName('');
    setSenderEmail('');
    setSenderMessage('');
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // validateForm(e.target.userName, e.target.userEmail, e.target.userMessage)
    if (false) {
      sendEmail()
    }
  }

  const handleChange = (data) => {
    switch (data.id) {
      case 'userName':
        setSenderName(data.value);
        break;
      case 'userEmail':
        setSenderEmail(data.value);
        break;
      case 'userMessage':
        setSenderMessage(data.value);
        break;
      default:
        resetState();
    }
  }

  const sendEmail = () => {
    emailjs.send(emailParams.service_Id, emailParams.template_Id, templateData, emailParams.user_Id)
      .then( (res) => {
        // console.log('SUCCESS!', res.status, res.text)
        callToast('success')
        resetState()
      }, (err) => {
        // console.log('FAILED...', err)
        callToast('error')
        resetState();
      }
    )
  }

  const { addToast } = useToasts()

  const callToast = (type) => {
    if (type === 'success') {
      addToast(t("Contact", "Message_Sent"), {
        appearance: 'success',
        autoDismiss: true,
        transitionDuration: 500,
      });
    }
    if (type === 'error') {
      addToast(t("Contact", "Message_Error"), {
        appearance: 'error',
        autoDismiss: true,
        transitionDuration: 500,
      })
    }
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
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="p-grid p-justify-center p-fluid p-nogutter">
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputText id="userName" value={senderName} onChange={(e) => {handleChange(e.target)}} validateOnly={true} required/>
                  <label htmlFor="userName">{t('Contact', 'Name')}</label>
                </span>
              </div>
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputText id="userEmail" value={senderEmail} onChange={(e) => {handleChange(e.target)}}/>
                  <label htmlFor="userEmail">{t('Contact', 'Email')}</label>
                </span>
              </div>
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputTextarea id="userMessage" value={senderMessage} onChange={(e) => {handleChange(e.target)}}/>
                  <label htmlFor="Message">{t('Contact', 'Message')}</label>
                </span>
              </div>
              <div className="p-col-12 p-md-8">
                <div className="p-col-4 p-offset-8 submit-button">
                  <Button label={t('Contact', 'Submit')} icon="fas fa-paper-plane" style={{'backgroundColor':'teal'}}/>
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
