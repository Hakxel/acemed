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
      label: t('Navigation', 'Home'),
      icon: 'pi pi-fw pi-home',
      url: '/',
      className: 'menu-link'
    },
    // {
    //   label: '|'
    // },
    {
      label: t('Navigation', 'Appointment'),
      icon: 'pi pi-calendar',
      url: '/appointments',
      className: 'menu-link'
    },
  ]


  return (
    <div className="navigation p-grid p-justify-center">
      <div className="p-col-12 p-md-10">
        <div className="navig-menu p-grid p-align-center p-justify-between">
          <div className="p-col-12 p-md-6">
            <div className="p-grid p-justify-start">
              <Logo placement='header'/>
            </div>
          </div>
          <div className="p-col-12 p-md-6">
            <div className="p-grid p-justify-end">
              <Menubar model={menubarItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Navigation

