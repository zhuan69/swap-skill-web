import ReactDOM from "react-dom/client"
import React from "react"
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import store from './store';
import App from './App'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);