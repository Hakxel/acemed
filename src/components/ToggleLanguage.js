import React, {useContext, Fragment} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import {Button} from 'primereact/button'

function ToggleLanguage() {

  const {t, changeLanguage} = useContext(LanguageContext)

  return (
    <Fragment>
      <Button label={t('ES')} onClick={() => changeLanguage('ES')}></Button>
      <Button label={t('EN')} onClick={() => changeLanguage('EN')}></Button>
    </Fragment>
  )
}

export default ToggleLanguage
