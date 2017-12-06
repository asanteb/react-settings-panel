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

var InputSetting = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(InputSetting, _Component);

	function InputSetting() {
		(0, _classCallCheck3.default)(this, InputSetting);

		var _this = (0, _possibleConstructorReturn3.default)(this, (InputSetting.__proto__ || (0, _getPrototypeOf2.default)(InputSetting)).call(this));

		_this.handleChange = function (e) {
			if (_this.props.onChange) _this.props.onChange(_this.props.store.settingsData);
			_this.props.store.settingsData[_this.props.name] = e.target.value;
			_this.setState({ value: e.target.value });
		};

		_this.state = {
			checked: false,
			header: '',
			value: ''
		};
		return _this;
	}

	(0, _createClass3.default)(InputSetting, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// this.initProps()
		}
	}, {
		key: 'render',
		value: function render() {
			var title = this.props.title ? this.props.title : null;
			var description = this.props.description ? this.props.description : null;

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
						type: 'text',
						className: 'uk-input',
						value: this.state.value,
						onChange: this.handleChange,
						id: 'settings-input'
					}),
					_react2.default.createElement(
						'dd',
						null,
						description
					),
					_react2.default.createElement('hr', null)
				)
			);
		}
	}]);
	return InputSetting;
}(_react.Component), _class2.displayName = "INPUT_SETTING", _temp)) || _class;

InputSetting.propTypes = {
	onValue: _propTypes2.default.func,
	onSubmit: _propTypes2.default.func,
	title: _propTypes2.default.string,
	description: _propTypes2.default.string,
	name: _propTypes2.default.string.isRequired
};

exports.default = InputSetting;