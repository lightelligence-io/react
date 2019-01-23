"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

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

var _isServerSideRendering = require("../../utils/isServerSideRendering");

var _constants = require("../../constants");

var Navbar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      open: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "navbarRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "handleOffClick", function (event) {
      var navbar = _this.navbarRef.current;
      var isContained = navbar.contains ? navbar.contains(event.target) : event.target;
      var isLink = event.target.closest('*[class*="link"]');

      if (!isContained || isLink) {
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

  (0, _createClass2.default)(Navbar, [{
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
          title = _this$props.title,
          home = _this$props.home,
          color = _this$props.color,
          outline = _this$props.outline,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className", "title", "home", "color", "outline"]);
      var open = this.state.open;
      var base = "".concat(_constants.OLT_NAMESPACE, "Navbar");
      return _react.default.createElement("nav", (0, _extends2.default)({
        ref: this.navbarRef
      }, props, {
        className: (0, _classnames.default)(base, "".concat(base, "--").concat(color), outline && "".concat(base, "--outline"), open && 'is-open', className)
      }), _react.default.createElement("button", {
        type: "button",
        className: "".concat(base, "-toggle"),
        onClick: this.handleClick
      }), _react.default.createElement("a", {
        className: "".concat(base, "-title"),
        href: home
      }, title), _react.default.createElement("div", {
        className: "".concat(base, "-content")
      }, _react.default.createElement("a", {
        className: "".concat(base, "-title"),
        href: home
      }, title), children));
    }
  }]);
  return Navbar;
}(_react.Component);

exports.Navbar = Navbar;
(0, _defineProperty2.default)(Navbar, "propTypes", {
  children: _propTypes.node,
  className: _propTypes.string,
  title: _propTypes.node,
  home: _propTypes.string,
  color: _propTypes.string,
  outline: _propTypes.bool
});
(0, _defineProperty2.default)(Navbar, "defaultProps", {
  children: null,
  className: null,
  title: null,
  home: '/',
  color: 'dark',
  outline: false
});