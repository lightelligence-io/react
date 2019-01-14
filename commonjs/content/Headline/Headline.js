"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Headline = void 0;

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

var _humps = require("humps");

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../constants");

var Headline =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Headline, _PureComponent);

  function Headline() {
    (0, _classCallCheck2.default)(this, Headline);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Headline).apply(this, arguments));
  }

  (0, _createClass2.default)(Headline, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          regular = _this$props.regular,
          tag = _this$props.tag,
          children = _this$props.children,
          size = _this$props.size,
          className = _this$props.className,
          color = _this$props.color,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["regular", "tag", "children", "size", "className", "color"]);
      var Element = tag || "h".concat(size);
      return _react.default.createElement(Element, (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Headline"), "".concat(_constants.OLT_NAMESPACE, "Headline--").concat(size), regular && "".concat(_constants.OLT_NAMESPACE, "Headline--regular"), color && "".concat(_constants.OLT_NAMESPACE, "u-text").concat((0, _humps.pascalize)(color)), className)
      }), children);
    }
  }]);
  return Headline;
}(_react.PureComponent);

exports.Headline = Headline;
(0, _defineProperty2.default)(Headline, "propTypes", {
  tag: _propTypes.string,
  size: (0, _propTypes.oneOf)([1, 2, 3, 4, 5, 6]),
  children: _propTypes.node.isRequired,
  color: _propTypes.string,
  className: _propTypes.string,
  regular: _propTypes.bool
});
(0, _defineProperty2.default)(Headline, "defaultProps", {
  tag: null,
  size: 5,
  color: null,
  className: null,
  regular: false
});