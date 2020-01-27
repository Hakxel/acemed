import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import '../node_modules/primeflex/primeflex.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
