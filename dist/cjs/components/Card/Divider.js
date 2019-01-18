"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _uniqid = _interopRequireDefault(require("uniqid"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

// TODO: Move out of here
// TODO check if we need an autoprefixer here
// TODO maybe we should solve the :after style otherwise
var dividerAfterStyle = function dividerAfterStyle(id) {
  return ".".concat(id, ":after {\n  content: '';\n  width: 2px;\n  background: currentColor;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  opacity: 0.6;\n}");
};

var Divider = function Divider(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  var id = (0, _uniqid.default)('olt_');
  var styles = {
    display: 'inline-block',
    width: '2px',
    marginTop: '0',
    marginBottom: '0'
  };
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    style: styles,
    className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "u-marginLeft3"), "".concat(_constants.OLT_NAMESPACE, "u-marginRight3"), "".concat(_constants.OLT_NAMESPACE, "u-textGray400"), id, className)
  }), _react.default.createElement("style", null, dividerAfterStyle(id)));
};

exports.Divider = Divider;
Divider.propTypes = {
  className: _propTypes.string
};
Divider.defaultProps = {
  className: null
};