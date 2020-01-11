import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LanguageProvider from './contexts/LanguageContext'



function App() {

  return (
    <LanguageProvider className="app">
        <Navigation />
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Router>
        <Footer />
    </LanguageProvider>
  )
}

export default App
