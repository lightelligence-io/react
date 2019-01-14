'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Paragraph = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
);

var _react = _interopRequireDefault(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = require('prop-types');

var _constants = require('../../constants');

var Paragraph = function Paragraph(_ref) {
  var className = _ref.className,
    props = (0, _objectWithoutProperties2.default)(_ref, ['className']);
  return _react.default.createElement(
    'p',
    (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(
        ''.concat(_constants.OLT_NAMESPACE, 'Paragraph'),
        className,
      ),
    }),
  );
};

exports.Paragraph = Paragraph;
Paragraph.propTypes = {
  className: _propTypes.string,
};
Paragraph.defaultProps = {
  className: null,
};
