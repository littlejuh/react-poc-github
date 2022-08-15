import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { BASE_PATH } from './utils/constants';

ReactDOM.render(
  <BrowserRouter basename={BASE_PATH}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

