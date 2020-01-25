import React, {useContext} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import {Menubar} from 'primereact/menubar'
import ToggleLanguage from './ToggleLanguage'
import Logo from './Logo'

function Navigation() {

  const {t} = useContext(LanguageContext)

  const handleClick = () => {
    alert("Don't panic")
  }

  const menubarItems = [
    {
      label: t('Home'),
      icon: 'pi pi-fw pi-home',
      url: '#hero',
      target: '_blank',
    },
    {
      label: t('About'),
      command: handleClick
    },
    {
      label: t('Contact')
    },
  ]

  // <Button label={t("Login")} className="p-button-rounded p-button-warning"/>
  // <Button label={t("Logout")} className="p-button-info" onClick={handleClick}/>


  return (
    <div className="navig-menu">
      <div className="p-grid p-align-center">
        <div className="p-col-12 p-md-2">
          <Logo />
        </div>
        <div className="p-col-12 p-lg-8 p-offset-2">
          <div className="p-grid p-justify-center">
            <div className="p-col-12 p-md-6">
              <Menubar model={menubarItems} />
            </div>  
          </div>  
        </div>
        <div className="p-col-2 p-md-2 p-offset-9">
          <ToggleLanguage />
        </div>

      </div>

    </div>
  
  )
}

export default Navigation

