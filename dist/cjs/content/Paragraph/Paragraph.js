"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _humps = require("humps");

var _constants = require("../../constants");

var _propTypes2 = require("../../propTypes");

var Paragraph = function Paragraph(_ref) {
  var className = _ref.className,
      element = _ref.element,
      style = _ref.style,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "element", "style", "size"]);
  var Component = element;
  var elemStyle = (0, _objectSpread2.default)({}, style, {
    // TODO: move this to the styleguide (modifier or default?)
    wordBreak: 'break-all',
    // TODO: Don't overwrite styleguide margins here, but it's currently used with these values in the portal and marketing site.
    // In the styleguide we use margin-bottom = 1rem and also have a last-child rule. We have to adjust this
    // either here or in the styleguide.
    margin: '0 0 0.5rem'
  });
  var classes = (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Paragraph"), "".concat(_constants.OLT_NAMESPACE, "u-fontSize").concat((0, _humps.pascalize)(size)), className);
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    style: elemStyle,
    className: classes
  }));
};

exports.Paragraph = Paragraph;
Paragraph.propTypes = {
  className: _propTypes.string,
  element: _propTypes2.copyTextTypeProp,
  size: _propTypes2.copyTextSizeProp,
  style: (0, _propTypes.shape)({})
};
Paragraph.defaultProps = {
  className: null,
  element: 'p',
  size: _constants.FONT_SIZE_SMALL,
  style: null
};