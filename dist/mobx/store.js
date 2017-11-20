"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor;

var _mobx = require("mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	(0, _defineProperty2.default)(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Workstore = (_class = function () {
	function Workstore() {
		(0, _classCallCheck3.default)(this, Workstore);

		_initDefineProp(this, "settingsData", _descriptor, this);
	}

	(0, _createClass3.default)(Workstore, [{
		key: "submit",
		value: function submit() {}
	}]);
	return Workstore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "settingsData", [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return {};
	}
}), _applyDecoratedDescriptor(_class.prototype, "submit", [_mobx.action], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, "submit"), _class.prototype)), _class);


var store = window.store = new Workstore();
exports.default = store;