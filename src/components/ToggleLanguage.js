import React, {useContext, useState, useEffect} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import {Button} from 'primereact/button'

function ToggleLanguage() {

  const {language, t, changeLanguage} = useContext(LanguageContext)
  const [buttonIcon, setButtonIcon] = useState('')
  const [buttonLang, setButtonLang] = useState('')

  useEffect(() => {
    if(!buttonIcon || !buttonLang) {
      switchButtonIconAndLanguage(language)
    }
  }, [])
  
  const switchButtonIconAndLanguage = (lang) => {
    let newLang = toggleLanguage(lang)
    let icon = newLang.toLowerCase() + '-icon'
    setButtonIcon(icon)
    setButtonLang(newLang)
  }


  const toggleLanguage = (lang) => {
    switch(lang) {
      case 'EN':
        return 'ES'
      case 'ES':
        return 'EN'
      default:
        return 'ES'
    }
  }

  const switchLang = () => {
    changeLanguage(buttonLang)
    switchButtonIconAndLanguage(buttonLang)
  }

  return (
    <div className="p-grid p-justify-center">
      <Button 
        label={t(buttonLang)} 
        className="toggleLangButton"
        icon={`${buttonIcon}`}
        onClick={() => switchLang()}
      />
    </div>
  )
}

export default ToggleLanguage
