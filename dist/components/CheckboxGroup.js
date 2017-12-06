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

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var CheckboxSetting = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(CheckboxSetting, _Component);

	function CheckboxSetting() {
		(0, _classCallCheck3.default)(this, CheckboxSetting);

		var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxSetting.__proto__ || (0, _getPrototypeOf2.default)(CheckboxSetting)).call(this));

		_this.handleChange = function (e) {
			if (_this.props.onChange) _this.props.onChange(e.target.value);
			_this.setState({ value: e.target.value });
		};

		_this.state = {
			value: ''
		};
		return _this;
	}

	(0, _createClass3.default)(CheckboxSetting, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var title = this.props.title ? this.props.title : null;
			var description = this.props.description ? this.props.description : null;
			var Checkboxes = [];

			if (!this.props.store.settingsData[this.props.name]) {
				this.props.store.settingsData[this.props.name] = {};
			}

			if (this.props.children.forEach) {
				this.props.children.forEach(function (child, i) {
					if (child.type.displayName === 'CHECKBOX') {
						var c = _react2.default.cloneElement(child, {
							store: _this2.props.store,
							key: (0, _md2.default)('boxes' + i),
							parentName: _this2.props.name
						});
						Checkboxes.push(c);
					}
				});
			}

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
					_react2.default.createElement(
						'div',
						{ className: 'uk-margin uk-grid-small uk-child-width-auto uk-grid' },
						Checkboxes.map(function (box) {
							return box;
						})
					),
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
	return CheckboxSetting;
}(_react.Component), _class2.displayName = "CHECKBOX_SETTING", _temp)) || _class;

CheckboxSetting.propTypes = {
	onValue: _propTypes2.default.func,
	onSubmit: _propTypes2.default.func,
	title: _propTypes2.default.string,
	description: _propTypes2.default.string,
	name: _propTypes2.default.string.isRequired
};

exports.default = CheckboxSetting;