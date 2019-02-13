"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var ModalFooter =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ModalFooter, _PureComponent);

  function ModalFooter() {
    (0, _classCallCheck2.default)(this, ModalFooter);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModalFooter).apply(this, arguments));
  }

  (0, _createClass2.default)(ModalFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Modal-footer"), className)
      }, props), children);
    }
  }]);
  return ModalFooter;
}(_react.PureComponent);

exports.ModalFooter = ModalFooter;
(0, _defineProperty2.default)(ModalFooter, "propTypes", {
  children: _propTypes.node,
  className: _propTypes.string
});
(0, _defineProperty2.default)(ModalFooter, "defaultProps", {
  children: null,
  className: null
});