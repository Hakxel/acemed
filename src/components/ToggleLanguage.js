import React, {useContext} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import {Button} from 'primereact/button'
import { sNavigation } from '../helpers/Styles'

function ToggleLanguage() {

  const {t, changeLanguage} = useContext(LanguageContext)

  return (
    <div>
      <Button label={t('ES')} onClick={() => changeLanguage('ES')} style={sNavigation.button}></Button>
      <Button label={t('EN')} onClick={() => changeLanguage('EN')} style={sNavigation.button}></Button>
    </div>
  )
}

export default ToggleLanguage
