"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = void 0;

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

var _Headline = require("../../content/Headline");

var _Container = require("../../layout/Container");

var ModalContent =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ModalContent, _PureComponent);

  function ModalContent() {
    (0, _classCallCheck2.default)(this, ModalContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModalContent).apply(this, arguments));
  }

  (0, _createClass2.default)(ModalContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          headline = _this$props.headline,
          error = _this$props.error,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "headline", "error"]);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Modal-inner"), className)
      }, props), headline && _react.default.createElement(_Container.Container, {
        noPadding: true
      }, _react.default.createElement(_Headline.Headline, {
        size: 6
      }, headline)), _react.default.createElement(_Container.Container, {
        noPadding: true
      }, children));
    }
  }]);
  return ModalContent;
}(_react.PureComponent);

exports.ModalContent = ModalContent;
(0, _defineProperty2.default)(ModalContent, "propTypes", {
  className: _propTypes.string,
  children: _propTypes.node,
  headline: _propTypes.node,
  error: _propTypes.bool
});
(0, _defineProperty2.default)(ModalContent, "defaultProps", {
  className: null,
  children: null,
  headline: null,
  error: false
});