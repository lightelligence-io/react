'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Icon = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectWithoutProperties'),
);

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _classnames = _interopRequireDefault(require('classnames'));

var _humps = require('humps');

var _constants = require('../../constants');

var Icon = function Icon(_ref) {
  var name = _ref.name,
    size = _ref.size,
    color = _ref.color,
    children = _ref.children,
    className = _ref.className,
    props = (0, _objectWithoutProperties2.default)(_ref, [
      'name',
      'size',
      'color',
      'children',
      'className',
    ]);
  var base = ''.concat(_constants.OLT_NAMESPACE, 'Icon');
  return _react.default.createElement(
    'i',
    (0, _extends2.default)({}, props, {
      'data-icon': name,
      className: (0, _classnames.default)(
        base,
        color && ''.concat(base, '--').concat(color),
        size &&
          ''
            .concat(_constants.OLT_NAMESPACE, 'u-fontSize')
            .concat((0, _humps.pascalize)(size)),
        className,
      ),
    }),
  );
};

exports.Icon = Icon;
Icon.propTypes = {
  name: _propTypes.string.isRequired,
  color: _propTypes.string,
  size: _propTypes.string,
  className: _propTypes.string,
  children: _propTypes.node,
};
Icon.defaultProps = {
  className: null,
  color: '',
  size: '',
  children: null,
};
