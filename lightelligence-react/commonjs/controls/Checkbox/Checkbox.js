'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Checkbox = void 0;

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

var _constants = require('../../constants');

var Checkbox =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Checkbox, _PureComponent);

    function Checkbox() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Checkbox);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Checkbox)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'onChange',
        function() {
          var _this$props = _this.props,
            checked = _this$props.checked,
            onChange = _this$props.onChange;
          if (onChange) onChange(!checked);
        },
      );
      return _this;
    }

    (0, _createClass2.default)(Checkbox, [
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            checked = _this$props2.checked;

          var label =
            children &&
            _react.default.createElement(
              'label',
              {
                htmlFor: 'checkbox1',
                className: 'label '
                  .concat(_constants.OLT_NAMESPACE, 'Checkbox-label ')
                  .concat(_constants.OLT_NAMESPACE, 'u-fontSizeSmall ')
                  .concat(_constants.OLT_NAMESPACE, 'u-marginBottom1'),
              },
              children,
            );

          return _react.default.createElement(
            'div',
            {
              className: ''.concat(_constants.OLT_NAMESPACE, 'Checkbox'),
            },
            _react.default.createElement('input', {
              id: 'checkbox1',
              type: 'checkbox',
              className: ''.concat(_constants.OLT_NAMESPACE, 'Checkbox-input'),
              checked: checked,
              onChange: this.onChange,
            }),
            label,
          );
        },
      },
    ]);
    return Checkbox;
  })(_react.PureComponent);

exports.Checkbox = Checkbox;
(0, _defineProperty2.default)(Checkbox, 'propTypes', {
  children: _propTypes.node,
  onChange: _propTypes.func,
  checked: _propTypes.bool,
});
(0, _defineProperty2.default)(Checkbox, 'defaultProps', {
  children: null,
  checked: false,
  onChange: null,
});
