"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Tooltip, _PureComponent);

  function Tooltip() {
    (0, _classCallCheck2.default)(this, Tooltip);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tooltip).apply(this, arguments));
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "renderMessage",
    value: function renderMessage() {
      var _this$props = this.props,
          message = _this$props.message,
          wide = _this$props.wide;
      return wide ? _react.default.createElement("p", null, message) : _react.default.createElement("span", null, message);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          wide = _this$props2.wide,
          bottom = _this$props2.bottom,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "wide", "bottom"]);
      var classes = bottom ? 'olt-Tooltip olt-Tooltip--bottom' : 'olt-Tooltip';
      return _react.default.createElement("div", (0, _extends2.default)({
        className: classes
      }, props), children, _react.default.createElement("div", {
        className: "olt-Tooltip-content"
      }, this.renderMessage()));
    }
  }]);
  return Tooltip;
}(_react.PureComponent);

exports.Tooltip = Tooltip;
(0, _defineProperty2.default)(Tooltip, "propTypes", {
  message: _propTypes.string.isRequired,
  children: _propTypes.element.isRequired,
  wide: _propTypes.bool,
  bottom: _propTypes.bool
});
(0, _defineProperty2.default)(Tooltip, "defaultProps", {
  wide: false,
  bottom: false
});