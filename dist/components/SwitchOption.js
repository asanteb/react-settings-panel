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

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSwitch = require('react-switch');

var _reactSwitch2 = _interopRequireDefault(_reactSwitch);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var SwitchOption = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(SwitchOption, _Component);

  function SwitchOption() {
    (0, _classCallCheck3.default)(this, SwitchOption);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwitchOption.__proto__ || (0, _getPrototypeOf2.default)(SwitchOption)).call(this));

    _this.handleChange = function (checked) {
      var onChange = _this.props.onChange;
      if (!_this.props.store.settingsData) _this.props.store.settingsData = [];
      _this.props.store.settingsData[_this.props.name] = checked;
      if (_this.props.onChange) onChange(_this.props.store.settingsData);
      _this.setState({ checked: checked });
    };

    _this.state = {
      checked: false,
      header: '',
      titleHorizontal: false
    };
    return _this;
  }

  (0, _createClass3.default)(SwitchOption, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initialValue = this.props.initialValue ? this.props.initialValue : null;
      if (this.initialValue !== null) this.setState({ checked: this.initialValue });
      this.titleHorizontal = this.props.titleHorizontal ? this.props.titleHorizontal : null;
      if (this.titleHorizontal !== null) this.setState({ titleHorizontal: this.titleHorizontal });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title ? this.props.title : null;
      var description = this.props.description ? this.props.description : null;
      var horizontalDivider = typeof this.props.hr === 'boolean' ? this.props.hr : null;
      var margin = typeof this.props.margin === 'boolean' ? this.props.margin : null;

      if (this.state.titleHorizontal) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'dl',
            { className: 'uk-description-list\n          ' + (horizontalDivider ? 'uk-description-list-divider' : '') + '\n          ' + (!margin ? 'uk-margin-remove' : '') },
            _react2.default.createElement(_reactSwitch2.default, {
              onChange: this.handleChange,
              checked: this.state.checked,
              id: 'switch-option'
            }),
            ' ',
            _react2.default.createElement(
              'span',
              { style: { verticalAlign: 'top' } },
              title
            ),
            _react2.default.createElement(
              'dd',
              null,
              description
            )
          ),
          horizontalDivider ? _react2.default.createElement('hr', null) : ''
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'dl',
          { className: 'uk-description-list\n          ' + (horizontalDivider ? 'uk-description-list-divider' : '') + '\n          ' + (!margin ? 'uk-margin-remove' : '') },
          _react2.default.createElement(
            'dt',
            null,
            title
          ),
          _react2.default.createElement(_reactSwitch2.default, {
            onChange: this.handleChange,
            checked: this.state.checked,
            id: 'switch-option'
          }),
          _react2.default.createElement(
            'dd',
            null,
            description
          )
        ),
        horizontalDivider ? _react2.default.createElement('hr', null) : ''
      );
    }
  }]);
  return SwitchOption;
}(_react.Component), _class2.displayName = "SWITCH_OPTION", _temp)) || _class) || _class);


SwitchOption.propTypes = {
  onChange: _propTypes2.default.func,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  initialValue: _propTypes2.default.bool,
  titleHorizontal: _propTypes2.default.bool
};

exports.default = SwitchOption;