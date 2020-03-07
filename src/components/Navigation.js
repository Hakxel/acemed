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
      url: '/',
      className: 'menu-link'
    },
    // {
    //   label: '|'
    // },
    {
      label: t('Appointment'),
      icon: 'pi pi-calendar',
      url: '/appointments',
      className: 'menu-link'
    },
  ]


  return (
    <div className="navigation p-grid p-justify-center">
      <div className="p-col-12 p-md-10">
        <div className="navig-menu p-grid p-align-center p-justify-between">
          {/* <div className="p-col-12 p-md-2 logo-wrapper"> */}
            <Logo />
          {/* </div> */}
          {/* <div className="p-col-12 p-md-10 menu-wrapper">
            <div className="p-grid p-justify-end menu-outer">
              <div className="p-col-12 p-md-4 menu-inner"> */}
                <Menubar model={menubarItems} />
              {/* </div>  
            </div>  
          </div> */}
          {/* <div className="p-col-12 p-md-2">
            <ToggleLanguage />
          </div> */}
        </div>
      </div>
    </div>
  
  )
}

export default Navigation

