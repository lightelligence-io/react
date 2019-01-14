"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _ControlledStepper = require("./ControlledStepper");

var Stepper =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Stepper, _PureComponent);

  function Stepper() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Stepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Stepper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      currentStepIdx: 1
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "change", function (idx) {
      _this.setState({
        currentStepIdx: idx
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Stepper, [{
    key: "render",
    value: function render() {
      var currentStepIdx = this.state.currentStepIdx;
      return _react.default.createElement(_ControlledStepper.ControlledStepper, (0, _extends2.default)({
        currentStepIdx: currentStepIdx,
        onChange: this.change
      }, this.props));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var currentStepIdx = _ref.currentStepIdx;

      if (currentStepIdx) {
        return {
          currentStepIdx: currentStepIdx
        };
      }

      return state;
    }
  }]);
  return Stepper;
}(_react.PureComponent);

exports.Stepper = Stepper;
Stepper.propTypes = {
  currentStepIdx: _propTypes.number
};
Stepper.defaultProps = {
  currentStepIdx: null
};