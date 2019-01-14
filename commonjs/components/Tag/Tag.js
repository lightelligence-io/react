"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

// import { colorProp, childrenProp } from '../../propTypes';
// replaced with string & node, otherwise we need to maintain the prop types
// definition, which doesn't add a lot of benefits
var Tag =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Tag, _PureComponent);

  function Tag() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Tag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tag)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (e) {
      var _this$props = _this.props,
          selectable = _this$props.selectable,
          onClick = _this$props.onClick;

      if (selectable) {
        onClick(e);
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Tag, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          color = _this$props2.color,
          outline = _this$props2.outline,
          selectable = _this$props2.selectable,
          onClick = _this$props2.onClick,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "children", "color", "outline", "selectable", "onClick"]);
      var base = "".concat(_constants.OLT_NAMESPACE, "Tag");
      var Element = selectable ? 'button' : 'span';
      return _react.default.createElement(Element, (0, _extends2.default)({}, props, {
        onClick: this.handleClick,
        className: (0, _classnames.default)(base, onClick && "".concat(base, "--selectable"), outline && "".concat(base, "--outline"), color && "".concat(base, "--").concat(color), className)
      }), children);
    }
  }]);
  return Tag;
}(_react.PureComponent);

exports.Tag = Tag;
(0, _defineProperty2.default)(Tag, "propTypes", {
  className: _propTypes.string,
  color: _propTypes.string,
  children: _propTypes.node,
  outline: _propTypes.bool,
  selectable: _propTypes.bool,
  icon: _propTypes.node,
  onClick: _propTypes.func
});
(0, _defineProperty2.default)(Tag, "defaultProps", {
  className: null,
  children: null,
  outline: false,
  selectable: false,
  icon: null,
  onClick: null,
  color: null
});