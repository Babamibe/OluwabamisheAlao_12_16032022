import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fontawesome/fontawesome-free-6.0.0-web/css/all.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

