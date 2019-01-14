'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.List = void 0;

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

var List =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(List, _PureComponent);

    function List() {
      (0, _classCallCheck2.default)(this, List);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(List).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(List, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            ordered = _this$props.ordered,
            definition = _this$props.definition,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'ordered',
              'definition',
            ]);
          var base = ''.concat(_constants.OLT_NAMESPACE, 'List');
          return _react.default.createElement(
            'ul',
            (0, _extends2.default)({}, props, {
              className: (0, _classnames.default)(
                base,
                ordered && ''.concat(base, '--ordered'),
                definition && ''.concat(base, '--definition'),
                className,
              ),
            }),
            children,
          );
        },
      },
    ]);
    return List;
  })(_react.PureComponent);

exports.List = List;
(0, _defineProperty2.default)(List, 'propTypes', {
  children: _propTypes.node,
  className: _propTypes.string,
  ordered: _propTypes.bool,
  definition: _propTypes.bool,
});
(0, _defineProperty2.default)(List, 'defaultProps', {
  children: null,
  className: _propTypes.string,
  ordered: false,
  definition: false,
});
