import React from 'react'
import ReactDOM from 'react-dom/client'
import HandleState from './data-context.jsx'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HandleState>
    <App />
    </HandleState>
  </React.StrictMode>,
)
