import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import MainHouter from './routers';
import ContextProvider from './Contexts/ContextApi';
import './globalCss/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <MainHouter />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
