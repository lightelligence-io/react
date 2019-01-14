'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Tab = void 0;

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

var Tab =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Tab, _PureComponent);

    function Tab() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Tab);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Tab)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'handleChange',
        function() {
          var _this$props = _this.props,
            onSelect = _this$props.onSelect,
            value = _this$props.value;
          if (onSelect) onSelect(value);
        },
      );
      return _this;
    }

    (0, _createClass2.default)(Tab, [
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            active = _this$props2.active,
            label = _this$props2.label,
            children = _this$props2.children;
          return _react.default.createElement(
            _react.default.Fragment,
            null,
            _react.default.createElement(
              'button',
              {
                type: 'button',
                onClick: this.handleChange,
                className: (0, _classnames.default)(
                  'olt-Tabs-header',
                  active && 'is-active',
                ),
              },
              label,
            ),
            children &&
              _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(
                    'olt-Tabs-content',
                    active && 'is-active',
                  ),
                },
                children,
              ),
          );
        },
      },
    ]);
    return Tab;
  })(_react.PureComponent);

exports.Tab = Tab;
(0, _defineProperty2.default)(Tab, 'propTypes', {
  value: _propTypes.string.isRequired,
  label: _propTypes.string,
  active: _propTypes.bool,
  children: _propTypes.node,
  onSelect: _propTypes.func,
});
(0, _defineProperty2.default)(Tab, 'defaultProps', {
  label: '',
  active: false,
  children: null,
  onSelect: null,
});
