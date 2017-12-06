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

var Radio = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(Radio, _Component);

	function Radio() {
		(0, _classCallCheck3.default)(this, Radio);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this));

		_this.validate = function () {
			return _this.props.store[_this.props.parentName][_this.props.value];
		};

		_this.handleChange = function (e, value) {
			_this.props.store.settingsData[_this.props.parentName] = value;
			if (_this.props.onChange) _this.props.onChange(_this.props.store.settingsData);
			_this.setState({ value: e.target.value });
		};

		_this.state = {
			value: ''
		};
		return _this;
	}

	(0, _createClass3.default)(Radio, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var value = this.props.value ? this.props.value : '';
			return _react2.default.createElement(
				'label',
				null,
				_react2.default.createElement('input', {
					name: this.props.parentName,
					value: this.props.value,
					type: 'radio',
					className: 'uk-radio',
					readOnly: true,
					onClick: function onClick(e) {
						return _this2.handleChange(e, value);
					},
					id: 'settings-radio'
				}),
				_react2.default.createElement(
					'span',
					{ style: { padding: '0.5em' } },
					value
				)
			);
		}
	}]);
	return Radio;
}(_react.Component), _class2.displayName = "RADIO", _temp)) || _class;

Radio.propTypes = {
	value: _propTypes2.default.string,
	onChange: _propTypes2.default.func
};

exports.default = Radio;