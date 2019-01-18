"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var Avatar =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Avatar, _PureComponent);

  function Avatar() {
    (0, _classCallCheck2.default)(this, Avatar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Avatar).apply(this, arguments));
  }

  (0, _createClass2.default)(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          size = _this$props.size,
          name = _this$props.name,
          className = _this$props.className,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["type", "size", "name", "className"]);
      var base = "".concat(_constants.OLT_NAMESPACE, "Avatar");
      var shortName = name.substr(0, 1);
      return _react.default.createElement("i", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(base, size === _constants.AVATAR_SIZE_LARGE && "".concat(base, "--large"), type === 'tenant' ? "".concat(base, "--tenant") : "".concat(base, "--user"), className)
      }), shortName);
    }
  }]);
  return Avatar;
}(_react.PureComponent);

exports.Avatar = Avatar;
(0, _defineProperty2.default)(Avatar, "propTypes", {
  name: _propTypes.string.isRequired,
  className: _propTypes.string,
  size: (0, _propTypes.oneOf)([_constants.AVATAR_SIZE_MEDIUM, _constants.AVATAR_SIZE_LARGE]),
  type: (0, _propTypes.oneOf)([_constants.AVATAR_TYPE_USER, _constants.AVATAR_TYPE_TENANT]).isRequired
});
(0, _defineProperty2.default)(Avatar, "defaultProps", {
  className: null,
  size: _constants.AVATAR_SIZE_MEDIUM
});