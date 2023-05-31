import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import MainHouter from './routers';
import ContextProvider from './Contexts/ContextApi';
import ContextHoverProvider from './Contexts/ContextFunctionsHover';
import './globalCss/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ContextHoverProvider>
        <BrowserRouter>
          <MainHouter />
        </BrowserRouter>
      </ContextHoverProvider>
    </ContextProvider>
  </React.StrictMode>,
)
