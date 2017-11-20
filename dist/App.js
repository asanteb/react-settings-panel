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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index.js');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Settings = function (_Component) {
  (0, _inherits3.default)(Settings, _Component);

  function Settings() {
    (0, _classCallCheck3.default)(this, Settings);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Settings.__proto__ || (0, _getPrototypeOf2.default)(Settings)).call(this));

    _this.handleChange = function (change) {
      //console.log(change)
    };

    _this.handleSubmit = function (data) {
      console.log(data);
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Settings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {

      var styles = this.state.styles;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _index.SettingsPanel,
          { color: '#728ad8', onSubmit: this.handleSubmit },
          _react2.default.createElement(_index.Toolbar, { store: 'sup' }),
          _react2.default.createElement(
            _index.Group,
            null,
            _react2.default.createElement(_index.Switch, { title: 'Switch One', name: 'a', onChange: this.handleChange }),
            _react2.default.createElement(_index.Switch, { title: 'Switch Two', name: 'b', onChange: this.handleChange }),
            _react2.default.createElement(_index.Switch, { title: 'Switch Three', name: 'c', onChange: this.handleChange }),
            _react2.default.createElement(_index.Input, { title: 'Input One', name: 'd', onChange: this.handleChange }),
            _react2.default.createElement(
              _index.Selection,
              { title: 'Selection ', name: 'e', onChange: this.handleChange },
              _react2.default.createElement(_index.Option, { value: 'a', onChange: this.handleChange }),
              _react2.default.createElement(_index.Option, { value: 'b', onChange: this.handleChange }),
              _react2.default.createElement(_index.Option, { value: 'c', onChange: this.handleChange })
            )
          ),
          _react2.default.createElement(
            _index.Group,
            null,
            _react2.default.createElement(_index.Switch, { title: 'Switch One', name: '1', onChange: this.handleChange }),
            _react2.default.createElement(_index.Switch, { title: 'Switch Three', name: '2', onChange: this.handleChange }),
            _react2.default.createElement(_index.TextArea, { title: 'TextArea', name: '3', onChange: this.handleChange }),
            _react2.default.createElement(
              _index.RadioGroup,
              { title: 'Radio', name: 'radioo', onChange: this.handleChange },
              _react2.default.createElement(_index.Radio, { value: 'A', onChange: this.handleChange }),
              _react2.default.createElement(_index.Radio, { value: 'B', onChange: this.handleChange }),
              _react2.default.createElement(_index.Radio, { value: 'C', onChange: this.handleChange })
            )
          ),
          _react2.default.createElement(
            _index.Group,
            null,
            _react2.default.createElement(_index.Switch, { name: 'aaa1', title: 'Switch One', onChange: this.handleChange }),
            _react2.default.createElement(_index.Switch, { name: 'aaa2', title: 'Switch Two', onChange: this.handleChange }),
            _react2.default.createElement(_index.Switch, { name: 'aaa3', title: 'Switch Three', onChange: this.handleChange }),
            _react2.default.createElement(_index.Switch, { name: 'aaa4', title: 'Switch 4', onChange: this.handleChange }),
            _react2.default.createElement(
              _index.CheckboxGroup,
              { name: 'Checkbox ahoy', title: 'Switch 4', onChange: this.handleChange },
              _react2.default.createElement(_index.Checkbox, { value: 'A', onChange: this.handleChange }),
              _react2.default.createElement(_index.Checkbox, { value: 'B', onChange: this.handleChange }),
              _react2.default.createElement(_index.Checkbox, { value: 'C', onChange: this.handleChange }),
              _react2.default.createElement(_index.Checkbox, { value: 'D', onChange: this.handleChange }),
              _react2.default.createElement(_index.Checkbox, { value: 'E', onChange: this.handleChange }),
              _react2.default.createElement(_index.Checkbox, { value: 'F', onChange: this.handleChange })
            )
          )
        )
      );
    }
  }]);
  return Settings;
}(_react.Component);

exports.default = Settings;