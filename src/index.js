import React from 'react';
import ReactDOM from 'react-dom';

// import './assets/css/custom-events.css';
// import mobX from './mobx/store.js';
const mobx = ''
import App from './App';

ReactDOM.render((
  <App store={mobx} size={'{s:9}'}/>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
