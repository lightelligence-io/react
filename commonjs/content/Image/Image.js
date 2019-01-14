'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Image = void 0;

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

var Image =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Image, _PureComponent);

    function Image() {
      (0, _classCallCheck2.default)(this, Image);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Image).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Image, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            src = _this$props.src,
            alt = _this$props.alt,
            className = _this$props.className,
            fluid = _this$props.fluid;
          return _react.default.createElement('img', {
            className: (0, _classnames.default)(
              ''.concat(_constants.OLT_NAMESPACE, 'Image'),
              fluid && ''.concat(_constants.OLT_NAMESPACE, 'Image--fluid'),
              className,
            ),
            src: src,
            alt: alt,
          });
        },
      },
    ]);
    return Image;
  })(_react.PureComponent);

exports.Image = Image;
(0, _defineProperty2.default)(Image, 'propTypes', {
  src: _propTypes.string.isRequired,
  alt: _propTypes.string,
  className: _propTypes.string,
  fluid: _propTypes.bool,
});
(0, _defineProperty2.default)(Image, 'defaultProps', {
  alt: null,
  className: null,
  fluid: false,
});
