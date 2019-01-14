'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Menu = void 0;

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

var _MenuItem = require('./MenuItem');

var Menu =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Menu, _PureComponent);

    function Menu() {
      (0, _classCallCheck2.default)(this, Menu);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Menu).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Menu, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            outline = _this$props.outline,
            submenu = _this$props.submenu,
            navbar = _this$props.navbar,
            disabled = _this$props.disabled,
            items = _this$props.items,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'color',
              'outline',
              'submenu',
              'navbar',
              'disabled',
              'items',
            ]);
          var base = ''.concat(_constants.OLT_NAMESPACE, 'Menu');
          var navbarBase = ''.concat(_constants.OLT_NAMESPACE, 'Navbar');
          return _react.default.createElement(
            'div',
            (0, _extends2.default)({}, props, {
              className: (0, _classnames.default)(
                base,
                color && ''.concat(base, '--').concat(color),
                outline && ''.concat(base, '--outline'),
                submenu && ''.concat(base, '--sub'),
                disabled && 'is-disabled',
                navbar && ''.concat(navbarBase, '-menu'),
              ),
            }),
            items.length > 0
              ? items.map(function(_ref) {
                  var label = _ref.label,
                    itemProps = (0, _objectWithoutProperties2.default)(_ref, [
                      'label',
                    ]);
                  return _react.default.createElement(
                    _MenuItem.MenuItem,
                    (0, _extends2.default)(
                      {
                        key: ''.concat(label),
                      },
                      itemProps,
                    ),
                    label,
                  );
                })
              : children,
          );
        },
      },
    ]);
    return Menu;
  })(_react.PureComponent);

exports.Menu = Menu;
(0, _defineProperty2.default)(Menu, 'propTypes', {
  children: _propTypes.node,
  className: _propTypes.string,
  color: _propTypes.string,
  outline: _propTypes.bool,
  submenu: _propTypes.bool,
  navbar: _propTypes.bool,
  disabled: _propTypes.bool,
  items: (0, _propTypes.arrayOf)(
    (0, _propTypes.shape)({
      label: _propTypes.string,
      to: _propTypes.string,
      target: _propTypes.string,
    }),
  ),
});
(0, _defineProperty2.default)(Menu, 'defaultProps', {
  children: null,
  className: null,
  color: '',
  outline: false,
  submenu: false,
  navbar: false,
  disabled: false,
  items: [],
});
