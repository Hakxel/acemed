import React, {useContext, Fragment} from 'react'
import {LanguageContext} from '../contexts/LanguageContext'
import Hero from './Hero'
import Services from './Services'
import Schedule from './Schedule'
import About from './About'
import Contact from './Contact'

function Home() {
  const {t} = useContext(LanguageContext)
  return (
    <Fragment>
      <Hero t={t} />
      <Services t={t} />
      <Schedule t={t} />
      <About t={t} />
      <Contact t={t} />
    </Fragment>
  )
}

export default Home

