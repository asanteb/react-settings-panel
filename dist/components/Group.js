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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var Group = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
	(0, _inherits3.default)(Group, _Component);

	function Group() {
		(0, _classCallCheck3.default)(this, Group);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).call(this));

		_this.state = {
			styles: styles
		};
		return _this;
	}

	(0, _createClass3.default)(Group, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var Children = [];
			if (this.props.children.forEach) {
				this.props.children.forEach(function (c, i) {
					var child = _react2.default.cloneElement(c, {
						store: _this2.props.store,
						key: (0, _md2.default)('group' + i)
					});
					Children.push(child);
				});
			}
			return _react2.default.createElement(
				'div',
				{ className: 'uk-card uk-card-default uk-card-body' },
				Children.map(function (Child) {
					return Child;
				})
			);
		}
	}]);
	return Group;
}(_react.Component), _class2.displayName = "GROUP", _temp)) || _class;

exports.default = Group;