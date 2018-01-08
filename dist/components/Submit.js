'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var Submit = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Submit, _Component);

  function Submit() {
    (0, _classCallCheck3.default)(this, Submit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Submit.__proto__ || (0, _getPrototypeOf2.default)(Submit)).call(this));

    _this.state = {
      styles: styles
    };
    return _this;
  }

  (0, _createClass3.default)(Submit, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'p',
        { className: 'uk-margin', style: { textAlign: 'right', padding: '1.5em' } },
        _react2.default.createElement(
          'button',
          { style: { backgroundColor: 'white' }, className: 'uk-button uk-button-default' },
          'Default'
        ),
        _react2.default.createElement(
          'button',
          { className: 'uk-button uk-button-primary' },
          'Primary'
        )
      );
    }
  }]);
  return Submit;
}(_react.Component), _class2.displayName = "SUBMIT", _temp)) || _class;

exports.default = Submit;