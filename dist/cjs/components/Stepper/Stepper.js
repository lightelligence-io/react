import _extends from '@babel/runtime/helpers/extends';
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
    // eslint-disable-line react/prop-types
    if (currentStepIdx) {
      return {
        currentStepIdx,
      };
    }

    return state;
  }

  render() {
    const { currentStepIdx } = this.state;
    return React.createElement(
      ControlledStepper,
      _extends(
        {
          currentStepIdx: currentStepIdx,
          onChange: this.change,
        },
        this.props,
      ),
    );
  }
}
