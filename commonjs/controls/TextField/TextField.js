"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var _uniqid = _interopRequireDefault(require("uniqid"));

var _constants = require("../../constants");

var styles = _interopRequireWildcard(require("./TextField.scss"));

var TextField =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TextField, _PureComponent);

  function TextField() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TextField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TextField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "elementId", (0, _uniqid.default)());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "inputRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "applyAutogrow", function () {
      var tf = _this.inputRef.current;
      var style = tf.style; // reset height and measure scrollHeight

      style.cssText = 'height:auto;';
      style.cssText = "height:".concat(tf.scrollHeight, "px");
    });
    return _this;
  }

  (0, _createClass2.default)(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var inputNode = this.inputRef.current; // This initialises the input for the styleguide
      // new OltTextField(inputNode); // eslint-disable-line no-new

      var autogrow = this.props.autogrow;

      if (autogrow) {
        inputNode.addEventListener('input', this.applyAutogrow);
        inputNode.addEventListener('change', this.applyAutogrow);
        this.applyAutogrow();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var autogrow = this.props.autogrow;
      var inputNode = this.inputRef.current;

      if (autogrow) {
        inputNode.removeEventListener('input', this.applyAutogrow);
        inputNode.removeEventListener('change', this.applyAutogrow);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          errorMessage = _this$props.errorMessage,
          fullwidth = _this$props.fullwidth,
          icon = _this$props.icon,
          infoText = _this$props.infoText,
          label = _this$props.label,
          floating = _this$props.floating,
          onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          readOnly = _this$props.readOnly,
          textarea = _this$props.textarea,
          value = _this$props.value,
          style = _this$props.style,
          autogrow = _this$props.autogrow,
          placeholder = _this$props.placeholder,
          required = _this$props.required,
          noFooter = _this$props.noFooter,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["className", "defaultValue", "disabled", "errorMessage", "fullwidth", "icon", "infoText", "label", "floating", "onChange", "onBlur", "readOnly", "textarea", "value", "style", "autogrow", "placeholder", "required", "noFooter"]);
      var elementId = this.elementId;
      var Element = textarea || autogrow ? 'textarea' : 'input';
      var hasFloatingLabel = floating && label;
      var base = "".concat(_constants.OLT_NAMESPACE, "TextField");
      var wrapperClasses = (0, _classnames.default)(base, fullwidth && 'is-fullwidth', hasFloatingLabel && "".concat(base, "--float"), icon && 'has-icon', !label && 'has-noLabel', className, errorMessage && 'has-error-message');
      var elementClasses = (0, _classnames.default)("".concat(_constants.OLT_NAMESPACE, "Input ").concat(base, "-input"), errorMessage && 'is-error', hasFloatingLabel && value && 'has-value', autogrow && styles.autogrow);
      var autogrowProps = autogrow ? {
        rows: '1'
      } : {};
      var showLabel = label && (floating || !errorMessage && !infoText);
      var newPlaceholder = placeholder || !floating && !showLabel && label || '';

      var labelElement = label && _react.default.createElement("label", {
        className: "".concat(_constants.OLT_NAMESPACE, "Label ").concat(base, "-label"),
        htmlFor: elementId
      }, label, required && !readOnly ? '*' : null);

      var noFooterStyle = noFooter ? {
        marginBottom: 0
      } : {};
      var wrapperStyle = (0, _objectSpread2.default)({}, style, noFooterStyle);
      return _react.default.createElement("div", {
        className: wrapperClasses,
        style: wrapperStyle
      }, !floating && labelElement, _react.default.createElement(Element, (0, _extends2.default)({
        className: elementClasses,
        defaultValue: defaultValue,
        disabled: disabled,
        id: elementId,
        onChange: onChange,
        onBlur: onBlur,
        readOnly: readOnly,
        ref: this.inputRef,
        value: value,
        placeholder: newPlaceholder
      }, autogrowProps, (0, _objectSpread2.default)({}, rest, {
        required: required
      }))), floating && labelElement, !noFooter && _react.default.createElement("span", {
        className: "".concat(base, "-footer")
      }, errorMessage && _react.default.createElement("span", {
        className: "".concat(base, "-message ").concat(_constants.OLT_NAMESPACE, "u-textError")
      }, readOnly ? _react.default.createElement("span", null, "\xA0") : errorMessage), infoText && _react.default.createElement("span", {
        className: "".concat(base, "-info")
      }, readOnly ? _react.default.createElement("span", null, "\xA0") : infoText)), icon && _react.default.createElement("span", {
        className: "".concat(base, "-icon"),
        style: {
          pointerEvents: 'none'
        }
      }, _react.default.createElement("i", {
        className: "".concat(_constants.OLT_NAMESPACE, "Icon"),
        "data-icon": icon
      })));
    }
  }]);
  return TextField;
}(_react.PureComponent);

exports.TextField = TextField;
(0, _defineProperty2.default)(TextField, "propTypes", {
  className: _propTypes.string,
  defaultValue: _propTypes.string,
  disabled: _propTypes.bool,
  errorMessage: _propTypes.string,
  fullwidth: _propTypes.bool,
  icon: _propTypes.string,
  floating: _propTypes.bool,
  infoText: _propTypes.string,
  label: _propTypes.string,
  onBlur: _propTypes.func,
  onChange: _propTypes.func,
  readOnly: _propTypes.bool,
  textarea: _propTypes.bool,
  required: _propTypes.bool,
  value: _propTypes.string,
  autogrow: _propTypes.bool,
  noFooter: _propTypes.bool,
  placeholder: _propTypes.string,
  style: (0, _propTypes.shape)({})
});
(0, _defineProperty2.default)(TextField, "defaultProps", {
  className: null,
  defaultValue: undefined,
  disabled: false,
  errorMessage: null,
  required: null,
  floating: true,
  fullwidth: false,
  icon: null,
  infoText: null,
  label: null,
  onBlur: undefined,
  onChange: undefined,
  readOnly: false,
  textarea: false,
  value: undefined,
  autogrow: false,
  noFooter: false,
  placeholder: null,
  style: null
});