'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var TextArea = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(TextArea, _Component);

  function TextArea() {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call(this));

    _this.handleChange = function (e) {
      if (_this.props.store) _this.props.store.settingsData[_this.props.name] = e.target.value;
      if (_this.props.store && _this.props.onChange) _this.props.onChange(_this.props.store.settingsData);
      _this.setState({ value: e.target.value }, function () {
        if (_this.props.hasOwnProperty("onChange") && !_this.props.store) {
          _this.props.onChange((0, _defineProperty3.default)({}, _this.props.name, e.target.value));
        }
      });
    };

    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.initialValue) this.setState({ value: this.initialValue });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title ? this.props.title : null;
      var description = this.props.description ? this.props.description : null;
      var horizontalDivider = typeof this.props.hr === 'boolean' ? this.props.hr : true;
      var width = typeof this.props.width === 'string' && this.props.width.includes('uk-width') ? this.props.width : "";

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'dl',
          { className: 'uk-description-list ' + (horizontalDivider ? 'uk-description-list-divider' : '') },
          _react2.default.createElement(
            'dt',
            null,
            title
          ),
          _react2.default.createElement('textarea', {
            type: 'text',
            className: 'uk-textarea ' + width,
            value: this.state.value,
            onChange: this.handleChange,
            id: 'settings-textArea'
          }),
          _react2.default.createElement(
            'dd',
            null,
            description
          ),
          horizontalDivider ? _react2.default.createElement('hr', null) : ''
        )
      );
    }
  }]);
  return TextArea;
}(_react.Component), _class2.displayName = "TEXT_AREA_SETTING", _temp)) || _class;

TextArea.propTypes = {
  onValue: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  hr: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  initialValue: _propTypes2.default.string
};

exports.default = TextArea;