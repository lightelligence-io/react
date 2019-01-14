"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = require("../../propTypes");

var _constants = require("../../constants");

var _Image = require("../../content/Image");

var _Link = require("../../content/Link");

var Card =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Card, _PureComponent);

  function Card() {
    (0, _classCallCheck2.default)(this, Card);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
  }

  (0, _createClass2.default)(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          image = _this$props.image,
          title = _this$props.title,
          description = _this$props.description,
          action = _this$props.action,
          color = _this$props.color,
          selectable = _this$props.selectable,
          className = _this$props.className,
          disabled = _this$props.disabled,
          to = _this$props.to,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "image", "title", "description", "action", "color", "selectable", "className", "disabled", "to"]);
      var base = "".concat(_constants.OLT_NAMESPACE, "Card");
      var classes = (0, _classnames.default)(base, color && "".concat(base, "--").concat(color), selectable && "".concat(base, "--selectable"), className, disabled && 'is-disabled');
      var Element = selectable && !to ? 'button' : to && _Link.Link || 'div';
      return _react.default.createElement(Element, (0, _extends2.default)({
        to: to || undefined,
        normal: to ? true : undefined,
        className: classes
      }, props), image && (typeof image === 'string' ? _react.default.createElement(_Image.Image, {
        className: "Image ".concat(_constants.OLT_NAMESPACE, "Card-image"),
        src: image,
        fluid: true
      }) : image), (title || description || action) && _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "Card-header")
      }, title && _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "Card-title")
      }, title), description && _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "Card-description")
      }, description), action && _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "Card-action")
      }, action)), children && _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "Card-content")
      }, children));
    }
  }]);
  return Card;
}(_react.PureComponent);

exports.Card = Card;
(0, _defineProperty2.default)(Card, "propTypes", {
  children: _propTypes.node,
  className: _propTypes.string,
  title: _propTypes.node,
  description: _propTypes.node,
  image: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  action: _propTypes.node,
  color: _propTypes2.colorProp,
  selectable: _propTypes.bool,
  disabled: _propTypes.bool,
  to: _propTypes.string
});
(0, _defineProperty2.default)(Card, "defaultProps", {
  children: null,
  className: null,
  title: null,
  description: null,
  image: null,
  action: null,
  color: null,
  selectable: false,
  disabled: false,
  to: ''
});