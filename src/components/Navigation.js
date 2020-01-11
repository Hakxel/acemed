import React, {useContext} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import ToggleLanguage from './ToggleLanguage'
import {Menubar} from 'primereact/menubar'
import {Button} from 'primereact/button'
import {sNavigation} from '../helpers/Styles'

function Navigation() {

  const {t} = useContext(LanguageContext)

  const handleClick = () => {
    alert("Don't panic")
  }

  const menubarItems = [
    {
      label: t('Home'),
      icon: 'pi pi-fw pi-home',
      url: 'http://www.example.com',
      target: '_blank',
    },
    {
      label: t('About'),
      command: handleClick
    },
    {
      label: t('Contact')
    }
  ]

  return (
    <Menubar model={menubarItems} style={sNavigation.menubar}>
      <Button label={t("Login")} className="p-button-rounded p-button-warning" style={sNavigation.button}/>
      <Button label={t("Logout")} className="p-button-info" style={sNavigation.button} onClick={handleClick}/>

      <ToggleLanguage />
    </Menubar>
  )
}

export default Navigation

