'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = require('./mobx/store.js');

var _store2 = _interopRequireDefault(_store);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//UIkit.use(Icons);

_reactDom2.default.render(_react2.default.createElement(_App2.default, { store: _store2.default }), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}