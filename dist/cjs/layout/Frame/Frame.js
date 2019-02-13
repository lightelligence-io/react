"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Frame = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

var Frame = function Frame(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Frame"), className)
  }));
};

exports.Frame = Frame;
Frame.propTypes = {
  className: _propTypes.string
};
Frame.defaultProps = {
  className: null
};
var _default = Frame; // eslint-disable-line import/no-default-export

exports.default = _default;