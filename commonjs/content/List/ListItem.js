'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ListItem = void 0;

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

var ListItem =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ListItem, _PureComponent);

    function ListItem() {
      (0, _classCallCheck2.default)(this, ListItem);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ListItem).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(ListItem, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            term = _this$props.term,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'term',
            ]);
          var base = ''.concat(_constants.OLT_NAMESPACE, 'List');
          return _react.default.createElement(
            _react.default.Fragment,
            null,
            term &&
              _react.default.createElement(
                'li',
                (0, _extends2.default)({}, props, {
                  className: (0, _classnames.default)(
                    ''.concat(base, '-term'),
                    className,
                  ),
                }),
                term,
              ),
            _react.default.createElement(
              'li',
              (0, _extends2.default)({}, props, {
                className: (0, _classnames.default)(
                  ''.concat(base, '-item'),
                  className,
                ),
              }),
              children,
            ),
          );
        },
      },
    ]);
    return ListItem;
  })(_react.PureComponent);

exports.ListItem = ListItem;
(0, _defineProperty2.default)(ListItem, 'propTypes', {
  children: _propTypes.node,
  className: _propTypes.string,
  term: _propTypes.string,
});
(0, _defineProperty2.default)(ListItem, 'defaultProps', {
  children: null,
  className: null,
  term: null,
});
