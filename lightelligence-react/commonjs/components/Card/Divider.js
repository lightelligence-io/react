'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Divider = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
);

var _react = _interopRequireDefault(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = require('prop-types');

var _Divider = _interopRequireDefault(require('./Divider.scss'));

var _constants = require('../../constants');

// TODO: Move out of here
var Divider = function Divider(_ref) {
  var className = _ref.className,
    props = (0, _objectWithoutProperties2.default)(_ref, ['className']);
  return _react.default.createElement(
    'div',
    (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(
        ''.concat(_constants.OLT_NAMESPACE, 'u-marginLeft3'),
        ''.concat(_constants.OLT_NAMESPACE, 'u-marginRight3'),
        ''.concat(_constants.OLT_NAMESPACE, 'u-textGray400'),
        _Divider.default.divider,
        className,
      ),
    }),
  );
};

exports.Divider = Divider;
Divider.propTypes = {
  className: _propTypes.string,
};
Divider.defaultProps = {
  className: null,
};
