'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.RadioButton = void 0;

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/classCallCheck'),
);

var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/createClass'),
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/possibleConstructorReturn'),
);

var _getPrototypeOf3 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/getPrototypeOf'),
);

var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/inherits'),
);

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/assertThisInitialized'),
);

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/defineProperty'),
);

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _classnames = _interopRequireDefault(require('classnames'));

var _constants = require('../../constants');

// TODO: Styleguide implementation
var RadioButton =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(RadioButton, _PureComponent);

    function RadioButton() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, RadioButton);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(
          RadioButton,
        )).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'onChange',
        function() {
          var _this$props = _this.props,
            onChange = _this$props.onChange,
            value = _this$props.value;
          if (onChange) onChange(value);
        },
      );
      return _this;
    }

    (0, _createClass2.default)(RadioButton, [
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            selected = _this$props2.selected,
            value = _this$props2.value,
            className = _this$props2.className,
            disabled = _this$props2.disabled;

          var label =
            children &&
            _react.default.createElement(
              'span',
              {
                className: ''.concat(_constants.OLT_NAMESPACE, 'Label'),
              },
              children,
            );

          var classes = (0, _classnames.default)(
            ''.concat(_constants.OLT_NAMESPACE, 'Radio'),
            className,
          );
          return _react.default.createElement(
            'label',
            {
              className: classes,
            },
            label,
            _react.default.createElement('input', {
              type: 'radio',
              name: 'radio',
              value: value,
              onChange: this.onChange,
              checked: selected,
              disabled: disabled,
            }),
            _react.default.createElement('span', {
              className: ''.concat(_constants.OLT_NAMESPACE, 'Radio-checkmark'),
            }),
          );
        },
      },
    ]);
    return RadioButton;
  })(_react.PureComponent);

exports.RadioButton = RadioButton;
(0, _defineProperty2.default)(RadioButton, 'propTypes', {
  value: _propTypes.string.isRequired,
  children: _propTypes.node,
  onChange: _propTypes.func,
  selected: _propTypes.bool,
  disabled: _propTypes.bool,
  className: _propTypes.string,
});
(0, _defineProperty2.default)(RadioButton, 'defaultProps', {
  children: null,
  selected: null,
  onChange: null,
  disabled: null,
  className: null,
});
