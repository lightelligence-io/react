"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

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

var Grid =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Grid, _PureComponent);

  function Grid() {
    (0, _classCallCheck2.default)(this, Grid);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Grid).apply(this, arguments));
  }

  (0, _createClass2.default)(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          noPadding = _this$props.noPadding,
          children = _this$props.children,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["noPadding", "children", "className"]);
      var classes = (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Grid"), noPadding && "".concat(_constants.OLT_NAMESPACE, "Grid--noPadding"), // NOTE: What about --gutterless?
      // ...or maybe better: Provide list of gutters like spacings and modifiers like `--gutter{0-4}`.
      className);
      return _react.default.createElement("div", (0, _extends2.default)({
        className: classes
      }, props), children);
    }
  }]);
  return Grid;
}(_react.PureComponent);

exports.Grid = Grid;
(0, _defineProperty2.default)(Grid, "propTypes", {
  noPadding: _propTypes.bool,
  className: _propTypes.string,
  children: _propTypes.node
});
(0, _defineProperty2.default)(Grid, "defaultProps", {
  noPadding: false,
  className: null,
  children: null
});