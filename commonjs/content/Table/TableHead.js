"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = void 0;

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

var TableHead =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableHead, _PureComponent);

  function TableHead() {
    (0, _classCallCheck2.default)(this, TableHead);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableHead).apply(this, arguments));
  }

  (0, _createClass2.default)(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          labels = _this$props.labels,
          className = _this$props.className;
      var classes = (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Table-row"), className);
      return _react.default.createElement("thead", {
        className: "".concat(_constants.OLT_NAMESPACE, "Table-head")
      }, _react.default.createElement("tr", {
        className: classes
      }, labels.map(function (label) {
        return _react.default.createElement("th", {
          key: "".concat(label),
          className: "".concat(_constants.OLT_NAMESPACE, "Table-header"),
          style: {
            width: 'auto'
          }
        }, label);
      })));
    }
  }]);
  return TableHead;
}(_react.PureComponent);

exports.TableHead = TableHead;
(0, _defineProperty2.default)(TableHead, "propTypes", {
  /**
   * list of labels for the header
   */
  labels: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  className: _propTypes.string
});
(0, _defineProperty2.default)(TableHead, "defaultProps", {
  className: ''
});