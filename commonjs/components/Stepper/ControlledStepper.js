'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ControlledStepper = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/extends'),
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

// TODO: Let's move this to applicaton level
var ControlledStepper =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ControlledStepper, _PureComponent);

    function ControlledStepper() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ControlledStepper);

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
          ControlledStepper,
        )).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'setStep',
        function(stepId) {
          var onChange = _this.props.onChange;
          onChange(stepId);
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'nextStep',
        function() {
          var currentStepIdx = _this.props.currentStepIdx;

          _this.setStep(currentStepIdx + 1);
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'prevStep',
        function() {
          var currentStepIdx = _this.props.currentStepIdx;

          _this.setStep(currentStepIdx - 1);
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'renderNavigationStep',
        function(_ref) {
          var id = _ref.id,
            label = _ref.label,
            disabled = _ref.disabled;
          var currentStepIdx = _this.props.currentStepIdx;
          var clickProps = disabled
            ? {}
            : {
                onClick: function onClick() {
                  return _this.setStep(id);
                },
              };
          var classes = (0, _classnames.default)(
            ''.concat(_constants.OLT_NAMESPACE, 'Stepper-header'),
            id === currentStepIdx && 'is-active',
          );
          return _react.default.createElement(
            'div',
            (0, _extends2.default)(
              {
                className: classes,
                role: 'presentation',
                disabled: disabled,
              },
              clickProps,
              {
                style: {
                  marginTop: 20,
                  marginBottom: 10,
                },
              },
            ),
            _react.default.createElement('span', null, label),
          );
        },
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(
          (0, _assertThisInitialized2.default)(_this),
        ),
        'renderContent',
        function(_ref2) {
          var id = _ref2.id,
            content = _ref2.content;
          var currentStepIdx = _this.props.currentStepIdx;
          var classes = (0, _classnames.default)(
            ''.concat(_constants.OLT_NAMESPACE, 'Stepper-content'),
            id === currentStepIdx && 'is-active',
          );
          var contentBody =
            typeof content === 'function'
              ? content({
                  setStep: _this.setStep,
                  nextStep: _this.nextStep,
                  previousStep: _this.previousStep,
                  currentStepIdx: currentStepIdx,
                })
              : content;
          return _react.default.createElement(
            'div',
            {
              className: classes,
            },
            contentBody,
          );
        },
      );
      return _this;
    }

    (0, _createClass2.default)(ControlledStepper, [
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            className = _this$props.className,
            steps = _this$props.steps;
          var classes = (0, _classnames.default)(
            ''.concat(_constants.OLT_NAMESPACE, 'Stepper'),
            className,
          );
          return _react.default.createElement(
            'section',
            {
              className: classes,
            },
            steps.map(function(x, i) {
              return _react.default.createElement(
                _react.Fragment,
                {
                  key: ''.concat(x.id),
                },
                _this2.renderNavigationStep(x),
                _this2.renderContent(x),
              );
            }),
          );
        },
      },
    ]);
    return ControlledStepper;
  })(_react.PureComponent);

exports.ControlledStepper = ControlledStepper;
(0, _defineProperty2.default)(ControlledStepper, 'propTypes', {
  className: _propTypes.string,
  steps: (0, _propTypes.arrayOf)(
    (0, _propTypes.shape)({
      id: _propTypes.number.isRequired,
      label: _propTypes.string.isRequired,
      content: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func])
        .isRequired,
      disabled: _propTypes.bool,
    }),
  ).isRequired,
  currentStepIdx: _propTypes.number,
  // eslint-disable-line
  onChange: _propTypes.func.isRequired,
});
(0, _defineProperty2.default)(ControlledStepper, 'defaultProps', {
  className: null,
  currentStepIdx: undefined,
});
