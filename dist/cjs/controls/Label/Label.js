"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../constants");

var Label =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Label, _PureComponent);

  function Label() {
    (0, _classCallCheck2.default)(this, Label);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
  }

  (0, _createClass2.default)(Label, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "style"]);
      return _react.default.createElement("label", (0, _extends2.default)({
        style: (0, _objectSpread2.default)({}, style, {
          display: 'block'
        }),
        className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Label"), className)
      }, props), children);
    }
  }]);
  return Label;
}(_react.PureComponent);

exports.Label = Label;
(0, _defineProperty2.default)(Label, "propTypes", {
  className: _propTypes.string,
  children: _propTypes.node,
  style: (0, _propTypes.shape)({})
});
(0, _defineProperty2.default)(Label, "defaultProps", {
  className: null,
  children: null,
  style: undefined
});