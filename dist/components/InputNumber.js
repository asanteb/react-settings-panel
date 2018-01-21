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

var _reactSwitch = require('react-switch');

var _reactSwitch2 = _interopRequireDefault(_reactSwitch);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var InputNumber = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(InputNumber, _Component);

  function InputNumber() {
    (0, _classCallCheck3.default)(this, InputNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputNumber.__proto__ || (0, _getPrototypeOf2.default)(InputNumber)).call(this));

    _this.handleChange = function (e) {
      if (_this.props.store && _this.props.onChange) _this.props.onChange(_this.props.store.settingsData);
      _this.props.store.settingsData[_this.props.name] = parseFloat(e.target.value);
      _this.setState({ value: parseFloat(e.target.value) }, function () {
        if (_this.props.hasOwnProperty("onChange") && !_this.props.store) {
          _this.props.onChange(parseFloat(e.target.value));
        }
      });
    };

    _this.state = {
      value: 0
    };
    return _this;
  }

  (0, _createClass3.default)(InputNumber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.initialValue) this.setState({ value: this.props.initialValue });
      this.props.store.settingsData[this.props.name] = this.state.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var width = typeof this.props.width === 'string' && this.props.width.includes('uk-width') ? this.props.width : "";
      var horizontalDivider = typeof this.props.hr === 'boolean' ? this.props.hr : true;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'dl',
          { className: 'uk-description-list uk-description-list-divider' },
          _react2.default.createElement(
            'dt',
            null,
            this.props.title
          ),
          _react2.default.createElement('input', {
            type: 'number',
            className: 'uk-input ' + width,
            value: this.state.value,
            onChange: this.handleChange,
            min: this.props.min,
            max: this.props.max,
            step: this.props.step,
            id: 'settings-input'
          }),
          _react2.default.createElement(
            'dd',
            null,
            this.props.description
          ),
          horizontalDivider ? _react2.default.createElement('hr', null) : ''
        )
      );
    }
  }]);
  return InputNumber;
}(_react.Component), _class2.displayName = "INPUT_NUMBER", _temp)) || _class;

InputNumber.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  title: null,
  description: null
};

InputNumber.propTypes = {
  onValue: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  name: _propTypes2.default.string.isRequired,
  initialValue: _propTypes2.default.number,
  width: _propTypes2.default.string,
  hr: _propTypes2.default.bool
};

exports.default = InputNumber;