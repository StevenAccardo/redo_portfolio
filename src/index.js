import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import '../node_modules/normalize.css/normalize.css';
import '../styles/main.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
