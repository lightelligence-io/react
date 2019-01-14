"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellRowIndex = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/esm/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _constants = require("../../constants");

/**
 * Define the cell rendering item with current index
 *
 * @props rowIndex dynamic prop, passed from parent
 * @props cellIndex dynamic prop, passed from parent
 */
var TableCellRowIndex =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableCellRowIndex, _PureComponent);

  function TableCellRowIndex() {
    (0, _classCallCheck2.default)(this, TableCellRowIndex);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableCellRowIndex).apply(this, arguments));
  }

  (0, _createClass2.default)(TableCellRowIndex, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("td", {
        className: "".concat(_constants.OLT_NAMESPACE, "Table-data")
      }, this.value);
    }
  }, {
    key: "value",
    get: function get() {
      var _this$props = this.props,
          rowIndex = _this$props.rowIndex,
          increase = _this$props.increase;
      return increase ? rowIndex + 1 : rowIndex;
    }
  }]);
  return TableCellRowIndex;
}(_react.PureComponent);

exports.TableCellRowIndex = TableCellRowIndex;
(0, _defineProperty2.default)(TableCellRowIndex, "propTypes", {
  increase: _propTypes.bool,
  rowIndex: _propTypes.number
});
(0, _defineProperty2.default)(TableCellRowIndex, "defaultProps", {
  increase: true,
  rowIndex: 0
});