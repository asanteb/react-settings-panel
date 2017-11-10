import React from 'react';
import ReactDOM from 'react-dom';

import UIkit from 'uikit';

import './assets/css/uikit.min.css';
import './assets/css/main.css';
// import mobX from './mobx/store.js';
const mobx = ''
import App from './App';

ReactDOM.render((
  <App color={'orange'} textColor={'black'}/>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
