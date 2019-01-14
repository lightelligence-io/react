"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;

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

var _constants = require("../../constants");

var Tabs =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Tabs, _PureComponent);

  function Tabs() {
    (0, _classCallCheck2.default)(this, Tabs);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tabs).apply(this, arguments));
  }

  (0, _createClass2.default)(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          onSelect = _this$props.onSelect,
          className = _this$props.className,
          children = _this$props.children,
          navigation = _this$props.navigation,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["value", "onSelect", "className", "children", "navigation"]);
      var base = "".concat(_constants.OLT_NAMESPACE, "Tabs");
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(base, navigation && "".concat(base, "--navigation"), className)
      }), _react.default.Children.map(children, function (element) {
        return _react.default.cloneElement(element, {
          onSelect: onSelect,
          active: value === element.props.value
        });
      }));
    }
  }]);
  return Tabs;
}(_react.PureComponent);

exports.Tabs = Tabs;
(0, _defineProperty2.default)(Tabs, "propTypes", {
  navigation: _propTypes.bool,
  value: _propTypes.string.isRequired,
  onSelect: _propTypes.func.isRequired,
  children: _propTypes.node.isRequired,
  className: _propTypes.string
});
(0, _defineProperty2.default)(Tabs, "defaultProps", {
  className: null,
  navigation: false
});