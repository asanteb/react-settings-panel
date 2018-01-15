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

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _store = require('../mobx/store.js');

var _store2 = _interopRequireDefault(_store);

var _mobxReact = require('mobx-react');

var _reactFlexboxGrid = require('react-flexbox-grid');

require('../assets/css/uikit.min.css');

require('../assets/css/main.css');

var _Submit = require('./Submit');

var _Submit2 = _interopRequireDefault(_Submit);

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
      var _this$props = _this.props,
          color = _this$props.color,
          textColor = _this$props.textColor;

      if (color) styles.backgroundColor = color;
      if (textColor) styles.textColor = textColor;
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
      var _props = this.props,
          noButtons = _props.noButtons,
          groupsInRows = _props.groupsInRows;

      var Submit = null;

      if (noButtons) Submit = null;else Submit = _react2.default.createElement(_Submit2.default, { submit: this.submitData, clear: this.clearData });

      if (this.props.children.forEach) {
        this.props.children.forEach(function (child) {
          if (child) {
            if (child.type.wrappedComponent.displayName === 'TOOLBAR') {
              Toolbar = _react2.default.cloneElement(child, {
                store: _this2.state.mobX
              });
            }
            if (child.type.wrappedComponent.displayName === 'GROUP') {
              var g = _react2.default.cloneElement(child, {
                store: _this2.state.mobX
              });
              Groups.push(g);
            }
          }
        });
      } else {
        var child = this.props.children;
        SingleUnknownProp = _react2.default.cloneElement(child, {
          store: this.state.mobX
        });
      }
      var groupLayout = _react2.default.createElement(
        _reactFlexboxGrid.Row,
        { style: { margin: '0 auto' } },
        Groups.map(function (Group, i) {
          return _react2.default.createElement(
            _reactFlexboxGrid.Col,
            {
              key: (0, _md2.default)('group-col-' + i),
              xs: true
            },
            Group
          );
        })
      );
      if (groupsInRows) {
        groupLayout = _react2.default.createElement(
          _reactFlexboxGrid.Col,
          { xl: true },
          Groups.map(function (Group, i) {
            return _react2.default.createElement(
              _reactFlexboxGrid.Row,
              {
                key: (0, _md2.default)('group-row-' + i),
                style: { margin: '8px' }
              },
              Group
            );
          })
        );
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
            groupLayout
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