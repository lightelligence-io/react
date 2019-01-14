"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../constants");

var _Link = require("../../content/Link");

var MenuItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(MenuItem, _PureComponent);

  function MenuItem() {
    (0, _classCallCheck2.default)(this, MenuItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MenuItem).apply(this, arguments));
  }

  (0, _createClass2.default)(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          to = _this$props.to,
          active = _this$props.active,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "to", "active"]);
      var Element = to ? _Link.Link : 'span';
      return _react.default.createElement("div", {
        className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Menu-item"), className)
      }, _react.default.createElement(Element, (0, _extends2.default)({}, (0, _objectSpread2.default)({}, props, to ? {
        to: to
      } : {}), {
        className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Menu-link"), active && 'is-active')
      }), children));
    }
  }]);
  return MenuItem;
}(_react.PureComponent);

exports.MenuItem = MenuItem;
(0, _defineProperty2.default)(MenuItem, "propTypes", {
  className: _propTypes.string,
  children: _propTypes.node,
  active: _propTypes.bool,
  to: _propTypes.string
});
(0, _defineProperty2.default)(MenuItem, "defaultProps", {
  className: null,
  children: null,
  active: false,
  to: null
});