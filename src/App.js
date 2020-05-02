import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Appointments from './components/Appointments'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LanguageProvider from './contexts/LanguageContext'
import { ToastProvider } from 'react-toast-notifications'



function App() {

  return (
    <LanguageProvider className="app">
      <ToastProvider placement="top-center">
        <Navigation />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/appointments" component={Appointments} />
        </Router>
        <Footer />
      </ToastProvider>
    </LanguageProvider>
  )
}

export default App
