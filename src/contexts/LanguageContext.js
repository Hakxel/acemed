import React, {Component} from 'react'
import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'


export const LanguageContext = React.createContext()


class LanguageProvider extends Component {

  state = {
    language: '',
  }

  changeLanguage = (lang) => {
    this.setState({
      language: lang
    })
  }

  translate = (txtKey, nestKey) => {
    if (nestKey) {
      switch (this.state.language) {
          case 'EN':
            return translationEN[txtKey][nestKey]
        
          case 'ES':
            return translationES[txtKey][nestKey]
        
          default:
            return translationEN[txtKey][nestKey]
        }  
    } else {      
      switch (this.state.language) {
        case 'EN':
          return translationEN[txtKey]
          
        case 'ES':
          return translationES[txtKey]
        
        default:
          return translationEN[txtKey]
      }  
    }
  }

  render() {
    return(
      <LanguageContext.Provider
        value={
          {
            changeLanguage: this.changeLanguage,
            t: this.translate,
          }          
        }
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export default LanguageProvider