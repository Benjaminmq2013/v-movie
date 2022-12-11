import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'

import { store } from './store'
import { Provider } from "react-redux"

import './global.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
