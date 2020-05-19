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
  const [hasNoErrors, setHasNoErrors] = useState(true)
  const [nameErrors, setNameErrors] = useState('')
  const [emailErrors, setEmailErrors] = useState('')
  const [messageErrors, setMessageErrors] = useState('')
  const [submitFailed, setSubmitFailed] = useState(false)


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
    setSenderName('')
    setSenderEmail('')
    setSenderMessage('')
    setNameErrors('')
    setEmailErrors('')
    setMessageErrors('')
    setHasNoErrors(true)
    setSubmitFailed(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    if (hasNoErrors && isNotEmpty() && hasValidEmail(senderEmail)) {
      sendEmail()
      // callToast('success')
      resetState()
    } else {
      setSubmitFailed(true)
    }
  }

  const isNotEmpty = () => {
    if (isEmpty(senderName) || isEmpty(senderEmail) || isEmpty(senderMessage)) {
      callToast("invalid")
      return false
    }
    return true
  }
  
  const isValidText = (field, value) => {
    // eslint-disable-next-line
    switch (field) {
      case 'name':
        if (hasInvalidChars(value)) {
          setNameErrors(t('Contact', 'Error_Chars'))
          return false
        } else {
          setNameErrors('')
        }
        if (value.length > 180) {
          setNameErrors(t('Contact', 'Error_Name_Length'))
          return false
        } else {
          setNameErrors('')
        }
        break;
      case 'message':
        if (hasInvalidChars(value)) {
          setMessageErrors(t('Contact', 'Error_Chars'))
          return false
        } else {
          setMessageErrors('')
        } 
        if(value.length > 2000) {
          setMessageErrors(t('Contact', 'Error_Message_Length'))
          return false
        } else {
          setMessageErrors('')
        }
        break
    }
    return true
  }

  const hasValidEmail = (value) => {
    if (isInvalidEmail(value)) {
      setEmailErrors(t('Contact', "Error_Email"))
      return false
    } else {
      setEmailErrors('')
      return true
    }
  }

  const isEmpty = (userInput) => {
    if (userInput === '') {
      return true
    }
    return false
  }
  
  const hasInvalidChars = (userInput) => {
    let invalidText = /[<>!@#$%^&*,]+/i
    if(userInput.match(invalidText)) {
      return true
    }
    return false
  }

  const isInvalidEmail = (userInput) => {
    let validEmail = /^.+@[^.].*\.[a-z]{2,}$/
    if(!userInput.match(validEmail)) {
      return true
    }
    return false
  }

  const handleChange = (data) => {
    // eslint-disable-next-line
    switch (data.id) {
      case 'userName':
        if(isValidText("name", data.value)) {
          setHasNoErrors(true)
        } else {
          setHasNoErrors(false)
        }
        setSenderName(data.value)
        break;
      case 'userEmail':
        setSenderEmail(data.value)
        if(submitFailed) {
          setEmailErrors('')
          setSubmitFailed(false)
        }
        break;
      case 'userMessage':
        if(isValidText("message", data.value)) {
          setHasNoErrors(true)
        } else {
          setHasNoErrors(false)
        }
        setSenderMessage(data.value);
        break;
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
    if (type === 'invalid') {
      addToast(t("Contact", "Error_Empty"), {
        appearance: 'warning',
        autoDismiss: true,
        transitionDuration: 500,
      })
    }
  }

  const errorMessage = (error) => {
    return <div className="error-message">{error}</div>
  }

  return (
    <div id="contact" className="home-component">
      <div className="p-grid p-justify-center">
        <div className="p-col-12 p-md-10 p-xl-8">
          <div className="contact-header p-grid p-justify-center p-align-center p-nogutter">
            <h2 className="p-col-8">{t('Contact', 'Header')}</h2>
          </div>
        </div>
        <div className="p-col-12 p-md-10 contact-form">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="p-grid p-justify-center p-fluid p-nogutter">
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputText id="userName" value={senderName} onChange={(e) => {handleChange(e.target)}}
                  autoComplete="disabled"/>
                  <label htmlFor="userName">{t('Contact', 'Name')}</label>
                </span>
                {nameErrors === '' ? null : errorMessage(nameErrors)}
              </div>
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputText id="userEmail" value={senderEmail} onChange={(e) => {handleChange(e.target)}} autoComplete="disabled"/>
                  <label htmlFor="userEmail">{t('Contact', 'Email')}</label>
                </span>
                {emailErrors === '' ? null : errorMessage(emailErrors)}
              </div>
              <div className="p-col-12 p-md-8 form-field">
                <span className="p-float-label">
                  <InputTextarea id="userMessage" value={senderMessage} onChange={(e) => {handleChange(e.target)}} autoComplete="disabled"/>
                  <label htmlFor="Message">{t('Contact', 'Message')}</label>
                </span>
                {messageErrors === '' ? null : errorMessage(messageErrors)}
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
