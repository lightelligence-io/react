import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import { ControlledStepper } from './ControlledStepper';
export class Stepper extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'state', {
      currentStepIdx: 1,
    });

    _defineProperty(this, 'change', (idx) => {
      this.setState({
        currentStepIdx: idx,
      });
    });
  }

  static getDerivedStateFromProps({ currentStepIdx }, state) {
    if (currentStepIdx) {
      return {
        currentStepIdx,
      };
    }

    return state;
  }

  render() {
    const _this$props = this.props,
      { currentStepIdx } = _this$props,
      props = _objectWithoutProperties(_this$props, ['currentStepIdx']);

    const { currentStepIdx: currentStepIdxState } = this.state;
    return React.createElement(
      ControlledStepper,
      _extends(
        {
          currentStepIdx: currentStepIdxState,
          onChange: this.change,
        },
        props,
      ),
    );
  }
}
Stepper.propTypes = {
  currentStepIdx: number,
};
Stepper.defaultProps = {
  currentStepIdx: null,
};
