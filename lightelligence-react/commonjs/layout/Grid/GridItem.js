'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GridItem = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/slicedToArray'),
);

var _typeof2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/typeof'),
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

var isFirstBreakpoint = function isFirstBreakpoint(breakpoint) {
  return breakpoint === 'xs';
};

var GridItem =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(GridItem, _PureComponent);

    function GridItem() {
      (0, _classCallCheck2.default)(this, GridItem);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(GridItem).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(GridItem, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            size = _this$props.size,
            offset = _this$props.offset,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'children',
              'size',
              'offset',
            ]);
          var classes = [''.concat(_constants.OLT_NAMESPACE, 'Grid-item')]; // NOTE: This is using new props-API:
          // TODO: Make it a single line!

          if ((0, _typeof2.default)(size) === 'object') {
            var _arr = Object.entries(size);

            for (var _i = 0; _i < _arr.length; _i++) {
              var _arr$_i = (0, _slicedToArray2.default)(_arr[_i], 2),
                breakpoint = _arr$_i[0],
                value = _arr$_i[1];

              var infix = isFirstBreakpoint(breakpoint)
                ? ''
                : ''.concat(breakpoint, '-');
              classes.push(
                ''
                  .concat(_constants.OLT_NAMESPACE, 'Grid-item--')
                  .concat(infix)
                  .concat(value),
              );
            }
          } else if (size) {
            classes.push(
              ''.concat(_constants.OLT_NAMESPACE, 'Grid-item--').concat(size),
            );
          }

          if ((0, _typeof2.default)(offset) === 'object') {
            var _arr2 = Object.entries(offset);

            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
              var _arr2$_i = (0, _slicedToArray2.default)(_arr2[_i2], 2),
                breakpoint = _arr2$_i[0],
                value = _arr2$_i[1];

              var _infix = isFirstBreakpoint(breakpoint)
                ? ''
                : ''.concat(breakpoint, '-');

              classes.push(
                ''
                  .concat(_constants.OLT_NAMESPACE, 'Grid-item--')
                  .concat(_infix, 'offset')
                  .concat(value),
              );
            }
          } else if (offset) {
            classes.push(
              ''
                .concat(_constants.OLT_NAMESPACE, 'Grid-item--offset')
                .concat(offset),
            );
          }

          return _react.default.createElement(
            'div',
            (0, _extends2.default)(
              {
                className: _classnames.default.apply(
                  void 0,
                  classes.concat([className]),
                ),
              },
              props,
            ),
            children,
          );
        },
      },
    ]);
    return GridItem;
  })(_react.PureComponent);

exports.GridItem = GridItem;
(0, _defineProperty2.default)(GridItem, 'propTypes', {
  children: _propTypes.node,
  className: _propTypes.string,
  size: (0, _propTypes.oneOfType)([
    _propTypes.number,
    _propTypes.string,
    (0, _propTypes.shape)({}),
  ]),
  offset: (0, _propTypes.oneOfType)([
    _propTypes.number,
    _propTypes.string,
    (0, _propTypes.shape)({}),
  ]),
});
(0, _defineProperty2.default)(GridItem, 'defaultProps', {
  children: null,
  className: null,
  size: 'auto',
  offset: '',
});
