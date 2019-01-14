"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../constants");

var Button = function Button(_ref) {
  var className = _ref.className,
      color = _ref.color,
      outline = _ref.outline,
      children = _ref.children,
      selectable = _ref.selectable,
      disabled = _ref.disabled,
      tag = _ref.tag,
      icon = _ref.icon,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "color", "outline", "children", "selectable", "disabled", "tag", "icon"]);
  var base = "".concat(_constants.OLT_NAMESPACE, "Button");
  var Element = tag || 'button';
  return _react.default.createElement(Element, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)(base, color && "".concat(base, "--").concat(color), outline && "".concat(base, "--outline"), icon && "".concat(base, "--icon"), selectable && "".concat(base, "--selectable"), disabled ? 'is-disabled' : '', className),
    "data-icon": icon || undefined
  }), children);
};

exports.Button = Button;
Button.propTypes = {
  tag: _propTypes.string,
  className: _propTypes.string,
  selectable: _propTypes.bool,
  outline: _propTypes.bool,
  icon: _propTypes.string,
  disabled: _propTypes.bool,
  children: _propTypes.node,
  color: _propTypes.string
};
Button.defaultProps = {
  tag: 'button',
  className: null,
  selectable: false,
  disabled: false,
  icon: '',
  outline: false,
  children: null,
  color: ''
};