import React, {useContext, useState} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import {ToggleButton} from 'primereact/togglebutton'

function ToggleLanguage() {

  const {t, changeLanguage} = useContext(LanguageContext)
  const [usingDefaultLang, setUsingDefaultLang] = useState(true)

  const switchLang = (e) => {
    e.preventDefault()
    setUsingDefaultLang(!usingDefaultLang)
    if (usingDefaultLang) {
      changeLanguage('ES')
    } else {
      changeLanguage('EN')
    }  
  }

  return (
    // <div className="p-grid lang-buttons">
    //   <Button icon={ES} iconPos="left" onClick={() => changeLanguage('ES')} />
    //   <Button icon={EN} iconPos="left" onClick={() => changeLanguage('EN')} />    
    // </div>
    <div className="p-grid">
      <ToggleButton 
        onLabel={t('ES')} 
        onIcon="es-icon"
        offLabel={t('EN')}
        offIcon="en-icon"
        checked={usingDefaultLang}
        onChange={(e) => switchLang(e)}
        />
    </div>
  )
}

export default ToggleLanguage
