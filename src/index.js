import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import '../node_modules/normalize.css/normalize.css';
import '../styles/vendor/icon-font.css';
import '../styles/main.scss';

render(<App />, document.getElementById('app'));
