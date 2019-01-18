"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _Label = require("../Label");

var _Select = require("../Select/Select");

// TODO move the following styles to the styleguide?
// TODO check if we need an autoprefixer here
var labelStyle = {
  color: 'initial',
  lineHeight: '1',
  height: '0.8rem'
};
var footerStyle = {
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.8rem',
  // TODO use css-variable this was $font-size-small
  height: '1.35rem',
  // TODO use css-variable this was $line-height-small;
  marginTop: '0.25rem' // TODO use css-variable this was map-get($spacers, 1);

};
var messageStyle = {
  textAlign: 'left',
  fontSize: '0.8rem' // TODO use css-variable this was $font-size-small

};

var SelectField =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectField, _PureComponent);

  function SelectField() {
    (0, _classCallCheck2.default)(this, SelectField);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectField).apply(this, arguments));
  }

  (0, _createClass2.default)(SelectField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          options = _this$props.options,
          label = _this$props.label,
          fullwidth = _this$props.fullwidth,
          errorMessage = _this$props.errorMessage,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "disabled", "options", "label", "fullwidth", "errorMessage", "readOnly", "required"]);
      var selectClasses = (0, _classnames.default)(className, errorMessage && 'is-error');
      return _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "SelectField")
      }, label && _react.default.createElement(_Label.Label, {
        style: labelStyle
      }, label, required && !readOnly ? '*' : null), _react.default.createElement(_Select.Select, (0, _extends2.default)({
        fullwidth: fullwidth,
        disabled: disabled,
        className: selectClasses,
        options: options
      }, (0, _objectSpread2.default)({}, props, {
        required: required,
        readOnly: readOnly
      }))), _react.default.createElement("span", {
        style: footerStyle
      }, errorMessage && _react.default.createElement("span", {
        style: messageStyle,
        className: "".concat(_constants.OLT_NAMESPACE, "u-textError")
      }, errorMessage)));
    }
  }]);
  return SelectField;
}(_react.PureComponent);

exports.SelectField = SelectField;
(0, _defineProperty2.default)(SelectField, "propTypes", {
  className: _propTypes.string,
  label: _propTypes.string.isRequired,
  fullwidth: _propTypes.bool,
  readOnly: _propTypes.bool,
  disabled: _propTypes.bool,
  required: _propTypes.bool,
  errorMessage: _propTypes.string,
  options: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    label: _propTypes.string,
    value: _propTypes.string
  })).isRequired
});
(0, _defineProperty2.default)(SelectField, "defaultProps", {
  className: null,
  errorMessage: null,
  readOnly: null,
  required: null,
  fullwidth: false,
  disabled: false
});