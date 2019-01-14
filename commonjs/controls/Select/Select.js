'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Select = void 0;

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

var Select =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Select, _PureComponent);

    function Select() {
      (0, _classCallCheck2.default)(this, Select);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Select).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(
      Select,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              className = _this$props.className,
              disabled = _this$props.disabled,
              options = _this$props.options,
              value = _this$props.value,
              fullwidth = _this$props.fullwidth,
              props = (0, _objectWithoutProperties2.default)(_this$props, [
                'className',
                'disabled',
                'options',
                'value',
                'fullwidth',
              ]);
            var base = ''.concat(_constants.OLT_NAMESPACE, 'Select');
            return _react.default.createElement(
              _react.default.Fragment,
              null,
              _react.default.createElement(
                'select',
                (0, _extends2.default)(
                  {
                    value: value,
                    className: (0, _classnames.default)(
                      base,
                      fullwidth && ''.concat(base, '--fullwidth'),
                      disabled && 'is-disabled',
                      !value && 'is-placeholder',
                      className,
                    ),
                    disabled: disabled,
                  },
                  props,
                ),
                Select.renderOptions(options, value),
              ),
            );
          },
        },
      ],
      [
        {
          key: 'renderOptions',
          value: function renderOptions(options, value) {
            return options.map(function(option) {
              var key = ''.concat(option.value, '-').concat(option.label);
              return _react.default.createElement(
                'option',
                {
                  value: option.value,
                  key: key,
                },
                option.label,
              );
            });
          },
        },
      ],
    );
    return Select;
  })(_react.PureComponent);

exports.Select = Select;
(0, _defineProperty2.default)(Select, 'propTypes', {
  className: _propTypes.string,
  value: _propTypes.string,
  fullwidth: _propTypes.bool,
  disabled: _propTypes.bool,
  options: (0, _propTypes.arrayOf)(
    (0, _propTypes.shape)({
      label: _propTypes.string,
      value: _propTypes.string,
    }),
  ).isRequired,
});
(0, _defineProperty2.default)(Select, 'defaultProps', {
  className: null,
  fullwidth: false,
  disabled: false,
  value: null,
});
