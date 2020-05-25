import React, {useState, useEffect, useContext} from 'react'
import Loader from './Loader'
import { LanguageContext } from '../contexts/LanguageContext'

function Appointments() {
  const [isLoading, setIsLoading] = useState(true)
  const {language} = useContext(LanguageContext)
  const frameLang = language.toLowerCase()

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div id="appointments">
      <div className="p-grid p-justify-center p-nogutter">
        <div className="p-col-12 p-md-10 booking-wrapper">
          {
            isLoading ? 
              <Loader />
              :
              <iframe title="booking" src={`https://acemedicalrehab-${frameLang}.youcanbook.me/?noframe=true&skipHeaderFooter=true`} id={`ycbmiframeacemedicalrehab-${frameLang}`} frameBorder="0" style={{ width: "100%", minHeight: "940px" }}></iframe>          
          }
        </div>
      </div>
    </div>
  )
}

export default Appointments
