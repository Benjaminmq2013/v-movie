import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"

import { store } from './store'
import { Provider } from "react-redux"

import './global.css'
import { SearchProvider } from './context/searchProvider';



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>

    <Provider store={store}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Provider>

  </React.StrictMode>
);
