import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import LanguageProvider from './contexts/LanguageContext'



function App() {

  return (
    <LanguageProvider className="app">
        <Router>
          <Route exact path="/" component={Home}></Route>
        </Router>
        <Footer />
    </LanguageProvider>
  )
}

export default App
