"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

var Container = function Container(_ref) {
  var className = _ref.className,
      noPadding = _ref.noPadding,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "noPadding"]);
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Container"), noPadding && "".concat(_constants.OLT_NAMESPACE, "Container--noPadding"), className)
  }));
};

exports.Container = Container;
Container.propTypes = {
  className: _propTypes.string,
  noPadding: _propTypes.bool
};
Container.defaultProps = {
  className: null,
  noPadding: false
};