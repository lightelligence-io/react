'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Snackbar = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
);

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/classCallCheck'),
);

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/createClass'),
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/possibleConstructorReturn'),
);

var _getPrototypeOf2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/getPrototypeOf'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/inherits'),
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/defineProperty'),
);

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

var _types = require('./types');

var Snackbar =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Snackbar, _PureComponent);

    function Snackbar() {
      (0, _classCallCheck2.default)(this, Snackbar);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Snackbar).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Snackbar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            open = _this$props.open,
            hidden = _this$props.hidden,
            type = _this$props.type,
            rest = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'open',
              'hidden',
              'type',
            ]);
          var base = ''.concat(_constants.OLT_NAMESPACE, 'Snackbar');
          return _react.default.createElement(
            'div',
            (0, _extends2.default)(
              {
                className: (0, _classnames.default)(
                  base,
                  type && ''.concat(base, '--').concat(type),
                  open && 'is-open',
                  className,
                ),
              },
              rest,
            ),
            children,
          );
        },
      },
    ]);
    return Snackbar;
  })(_react.PureComponent);

exports.Snackbar = Snackbar;
(0, _defineProperty2.default)(Snackbar, 'propTypes', {
  children: _propTypes.node,
  className: _propTypes.string,
  open: _propTypes.bool,
  type: (0, _propTypes.oneOf)([
    _types.SNACKBAR_TYPE_ERROR,
    _types.SNACKBAR_TYPE_SUCCESS,
  ]),
  hidden: _propTypes.bool,
});
(0, _defineProperty2.default)(Snackbar, 'defaultProps', {
  open: true,
  className: null,
  type: _types.SNACKBAR_TYPE_ERROR,
  children: null,
  hidden: false,
});
