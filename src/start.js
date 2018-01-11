import React from 'react';
import ReactDOM from 'react-dom';

import mobX from './mobx/store.js';
import App from './App';

//UIkit.use(Icons);

ReactDOM.render((
  <App store={mobX} />
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
