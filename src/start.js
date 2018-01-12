import React from 'react';
import ReactDOM from 'react-dom';

import mobX from './mobx/store.js';
import App from './App';

import './assets/css/uikit.min.css';
import './assets/css/uikit.g4m3r-theme.min.css';

//UIkit.use(Icons);

ReactDOM.render((
  <App store={mobX} />
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
