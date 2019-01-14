"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../constants");

/**
 * Define the cell rendering item
 *
 * @props rowIndex dynamic prop, passed from parent
 * @props cellIndex dynamic prop, passed from parent
 * @info the full row will be pass to renderer if defined renderer function
 */
var TableCell =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableCell, _PureComponent);

  function TableCell() {
    (0, _classCallCheck2.default)(this, TableCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableCell).apply(this, arguments));
  }

  (0, _createClass2.default)(TableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          row = _this$props.row,
          field = _this$props.field,
          renderer = _this$props.renderer,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["row", "field", "renderer", "className"]);
      var classes = (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Table-data"), className);
      return _react.default.createElement("td", (0, _extends2.default)({
        className: classes
      }, props), ' ', this.value);
    }
  }, {
    key: "value",
    get: function get() {
      var _this$props2 = this.props,
          row = _this$props2.row,
          field = _this$props2.field,
          renderer = _this$props2.renderer;

      try {
        if (typeof renderer === 'function') {
          return renderer(row, field, this);
        }
      } catch (e) {
        console.warn("Cell renderer error [".concat(field, "]"), e); // eslint-disable-line no-console

        return null;
      }

      if (Object.prototype.hasOwnProperty.call(row, field)) {
        return row[field];
      }

      return null;
    }
  }]);
  return TableCell;
}(_react.PureComponent);

exports.TableCell = TableCell;
(0, _defineProperty2.default)(TableCell, "propTypes", {
  /**
   * define the key if object
   */
  field: _propTypes.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * mixed type, could be everything
   */
  row: _propTypes.any,
  // eslint-disable-line react/forbid-prop-types

  /**
   * optional rendering function
   * @info not use field to resolve the line, always use the row data
   */
  renderer: _propTypes.func,
  className: _propTypes.string
});
(0, _defineProperty2.default)(TableCell, "defaultProps", {
  row: null,
  renderer: null,
  className: null
});