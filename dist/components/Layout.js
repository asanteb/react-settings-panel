'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _store = require('../mobx/store.js');

var _store2 = _interopRequireDefault(_store);

var _mobxReact = require('mobx-react');

var _reactFlexboxGrid = require('react-flexbox-grid');

var _uikit = require('uikit');

var _uikit2 = _interopRequireDefault(_uikit);

require('../assets/css/uikit.min.css');

require('../assets/css/main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// UIkit.use(Icons)

var defaultStyles = {
	backgroundColor: '#728ad8',
	color: 'white'
};

var Settings = function (_Component) {
	(0, _inherits3.default)(Settings, _Component);

	function Settings() {
		(0, _classCallCheck3.default)(this, Settings);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Settings.__proto__ || (0, _getPrototypeOf2.default)(Settings)).call(this));

		_this.loadStyles = function () {
			var styles = (0, _extends3.default)({}, _this.state.styles);
			var userStyles = _this.props;
			if (userStyles.color) styles.backgroundColor = userStyles.color;
			if (userStyles.textColor) styles.textColor = userStyles.textColor;
			_this.setState({ styles: styles });
		};

		_this.submitData = function () {
			_this.props.onSubmit((0, _extends3.default)({}, _this.state.mobX.settingsData));
		};

		_this.clearData = function () {
			var store = _this.state.mobX;
			store.settingsData = {};
			_this.setState({ mobX: store });
		};

		_this.state = {
			styles: defaultStyles,
			mobX: _store2.default
		};
		return _this;
	}

	(0, _createClass3.default)(Settings, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadStyles();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var Toolbar = null;
			var Groups = [];
			var SingleUnknownProp = null;
			var Submit = _react2.default.createElement(
				'p',
				{ className: 'uk-margin', style: { textAlign: 'right', padding: '1.5em' } },
				_react2.default.createElement(
					'button',
					{ onClick: this.clearData, style: { backgroundColor: 'white' }, className: 'uk-button uk-button-default' },
					'Cancel'
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.submitData, className: 'uk-button uk-button-primary' },
					'Submit'
				)
			);

			if (this.props.children.forEach) {
				this.props.children.forEach(function (child) {
					if (child.type.displayName === 'TOOLBAR') {
						Toolbar = _react2.default.cloneElement(child, {
							store: _this2.state.mobX
						});
					}
					if (child.type.displayName === 'GROUP') {
						var g = _react2.default.cloneElement(child, {
							store: _this2.state.mobX
						});

						Groups.push(g);
					}
				});
			} else {
				var child = this.props.children;
				SingleUnknownProp = _react2.default.cloneElement(child, {
					store: this.state.mobX
				});
			}
			return _react2.default.createElement(
				_mobxReact.Provider,
				{ store: this.state.mobX },
				_react2.default.createElement(
					'div',
					{ className: 'settings-layout', style: this.state.styles },
					Toolbar,
					_react2.default.createElement(
						_reactFlexboxGrid.Grid,
						{ fluid: true, className: 'settings-main-container' },
						_react2.default.createElement(
							_reactFlexboxGrid.Row,
							{ style: { margin: '0 auto' } },
							Groups.map(function (Group, i) {
								return _react2.default.createElement(
									_reactFlexboxGrid.Col,
									{ xs: true, key: (0, _md2.default)('group' + i) },
									Group
								);
							})
						)
					),
					SingleUnknownProp,
					Submit
				)
			);
		}
	}]);
	return Settings;
}(_react.Component);

exports.default = Settings;