"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../constants");

var _isServerSideRendering = require("../../utils/isServerSideRendering");

var Dropdown =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      open: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "dropdownRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOffClick", function (event) {
      var dropdown = _this.dropdownRef.current;
      var isContained = 'contains' in dropdown ? dropdown.contains(event.target) : event.target;

      if (!isContained) {
        _this.setState({
          open: false
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleClick", function (event) {
      var open = _this.state.open;

      _this.setState({
        open: !open
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_isServerSideRendering.isServerSideRendering) {
        window.addEventListener('click', this.handleOffClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_isServerSideRendering.isServerSideRendering) {
        window.removeEventListener('click', this.handleOffClick);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          label = _this$props.label,
          color = _this$props.color,
          outline = _this$props.outline,
          disabled = _this$props.disabled,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "label", "color", "outline", "disabled"]);
      var open = this.state.open;
      var base = "".concat(_constants.OLT_NAMESPACE, "Dropdown");
      return _react.default.createElement("div", (0, _extends2.default)({
        ref: this.dropdownRef
      }, props, {
        className: (0, _classnames.default)(base, color && "".concat(base, "--").concat(color), outline && "".concat(base, "--outline"), className, open && "is-open", disabled && "is-disabled")
      }), _react.default.createElement("button", {
        type: "button",
        className: "".concat(_constants.OLT_NAMESPACE, "Dropdown-label"),
        onClick: this.handleClick
      }, label), _react.default.createElement("div", {
        className: "".concat(_constants.OLT_NAMESPACE, "Dropdown-content")
      }, children));
    }
  }]);
  return Dropdown;
}(_react.Component);

exports.Dropdown = Dropdown;
(0, _defineProperty2.default)(Dropdown, "propTypes", {
  children: _propTypes.node,
  className: _propTypes.string,
  label: _propTypes.node.isRequired,
  color: _propTypes.string,
  outline: _propTypes.bool,
  disabled: _propTypes.bool
});
(0, _defineProperty2.default)(Dropdown, "defaultProps", {
  children: null,
  className: null,
  color: '',
  outline: false,
  disabled: false
});