import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import MainHouter from './routers';
import './globalCss/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainHouter />
    </BrowserRouter>
  </React.StrictMode>,
)
