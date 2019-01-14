'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SelectField = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
);

var _objectSpread2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/objectSpread'),
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

var _Label = require('../Label');

var _Select = require('../Select/Select');

var styles = _interopRequireWildcard(require('./SelectField.scss'));

var SelectField =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(SelectField, _PureComponent);

    function SelectField() {
      (0, _classCallCheck2.default)(this, SelectField);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(SelectField).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(SelectField, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            disabled = _this$props.disabled,
            options = _this$props.options,
            label = _this$props.label,
            fullwidth = _this$props.fullwidth,
            errorMessage = _this$props.errorMessage,
            readOnly = _this$props.readOnly,
            required = _this$props.required,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'disabled',
              'options',
              'label',
              'fullwidth',
              'errorMessage',
              'readOnly',
              'required',
            ]);
          var selectClasses = (0, _classnames.default)(
            className,
            errorMessage && 'is-error',
          );
          return _react.default.createElement(
            'div',
            {
              className: ''
                .concat(_constants.OLT_NAMESPACE, 'SelectField ')
                .concat(styles.selectField),
            },
            label &&
              _react.default.createElement(
                _Label.Label,
                null,
                label,
                required && !readOnly ? '*' : null,
              ),
            _react.default.createElement(
              _Select.Select,
              (0, _extends2.default)(
                {
                  fullwidth: fullwidth,
                  disabled: disabled,
                  className: selectClasses,
                  options: options,
                },
                (0, _objectSpread2.default)({}, props, {
                  required: required,
                  readOnly: readOnly,
                }),
              ),
            ),
            _react.default.createElement(
              'span',
              {
                className: styles.footer,
              },
              errorMessage &&
                _react.default.createElement(
                  'span',
                  {
                    className: ''
                      .concat(styles.message, ' ')
                      .concat(_constants.OLT_NAMESPACE, 'u-textError'),
                  },
                  errorMessage,
                ),
            ),
          );
        },
      },
    ]);
    return SelectField;
  })(_react.PureComponent);

exports.SelectField = SelectField;
(0, _defineProperty2.default)(SelectField, 'propTypes', {
  className: _propTypes.string,
  label: _propTypes.string.isRequired,
  fullwidth: _propTypes.bool,
  readOnly: _propTypes.bool,
  disabled: _propTypes.bool,
  required: _propTypes.bool,
  errorMessage: _propTypes.string,
  options: (0, _propTypes.arrayOf)(
    (0, _propTypes.shape)({
      label: _propTypes.string,
      value: _propTypes.string,
    }),
  ).isRequired,
});
(0, _defineProperty2.default)(SelectField, 'defaultProps', {
  className: null,
  errorMessage: null,
  readOnly: null,
  required: null,
  fullwidth: false,
  disabled: false,
});
