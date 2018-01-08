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

var SwitchOption = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(SwitchOption, _Component);

	function SwitchOption() {
		(0, _classCallCheck3.default)(this, SwitchOption);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SwitchOption.__proto__ || (0, _getPrototypeOf2.default)(SwitchOption)).call(this));

		_this.handleChange = function (checked) {
			var onChange = _this.props.onChange;
			_this.props.store.settingsData[_this.props.name] = checked;
			if (_this.props.onChange) onChange(_this.props.store.settingsData);
			_this.setState({ checked: checked });
		};

		_this.state = {
			checked: false,
			header: ''
		};
		return _this;
	}

	(0, _createClass3.default)(SwitchOption, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
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
				_react2.default.createElement('hr', null)
			);
		}
	}]);
	return SwitchOption;
}(_react.Component), _class2.displayName = "SWITCH_OPTION", _temp)) || _class;

SwitchOption.propTypes = {
	onChange: _propTypes2.default.func,
	title: _propTypes2.default.string,
	description: _propTypes2.default.string,
	name: _propTypes2.default.string.isRequired
};

exports.default = SwitchOption;