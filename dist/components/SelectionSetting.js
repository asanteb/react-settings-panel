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

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var SelectionSetting = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(SelectionSetting, _Component);

	function SelectionSetting() {
		(0, _classCallCheck3.default)(this, SelectionSetting);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SelectionSetting.__proto__ || (0, _getPrototypeOf2.default)(SelectionSetting)).call(this));

		_this.handleChange = function (e, def) {
			// if (this.state.value && loaded)
			_this.props.store.settingsData[_this.props.name] = e.target.value;
			if (_this.props.onChange) _this.props.onChange(_this.props.store.settingsData);
			_this.setState({ value: e.target.value });
		};

		_this.state = {
			value: '',
			loaded: false
		};
		return _this;
	}

	(0, _createClass3.default)(SelectionSetting, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var title = this.props.title ? this.props.title : null;
			var description = this.props.description ? this.props.description : null;
			var Selections = [];
			var defaultVal = this.state.value;
			if (this.props.children.forEach) {
				this.props.children.forEach(function (child, i) {
					if (child.type.displayName === 'SELECTION') {
						var c = _react2.default.cloneElement(child, {
							store: _this2.props.store,
							key: (0, _md2.default)('selection' + i),
							parentName: _this2.props.name
						});
						Selections.push(c);
						if (i === 0 && !_this2.state.value) {
							defaultVal = c.props.value;
						}
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
						{ className: 'uk-margin' },
						_react2.default.createElement(
							'select',
							{ className: 'uk-select',
								onChange: function onChange(e) {
									return _this2.handleChange(e, defaultVal);
								}
							},
							_react2.default.createElement(
								'option',
								{ value: '' },
								'Select an Item'
							),
							Selections.map(function (box) {
								return box;
							})
						)
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
	return SelectionSetting;
}(_react.Component), _class2.displayName = "SELECTION_SETTING", _temp)) || _class;

SelectionSetting.propTypes = {
	onValue: _propTypes2.default.func,
	onChange: _propTypes2.default.func,
	title: _propTypes2.default.string,
	description: _propTypes2.default.string,
	name: _propTypes2.default.string.isRequired
};

exports.default = SelectionSetting;