import React, { PureComponent } from 'react';
import { number } from 'prop-types';

import { ControlledStepper } from './ControlledStepper';

export class Stepper extends PureComponent {
  static getDerivedStateFromProps({ currentStepIdx }, state) {
    // eslint-disable-line react/prop-types
    if (currentStepIdx) {
      return {
        currentStepIdx,
      };
    }
    return state;
  }

  state = {
    currentStepIdx: 1,
  };

  change = (idx) => {
    this.setState({ currentStepIdx: idx });
  };

  render() {
    const { currentStepIdx } = this.state;
    return (
      <ControlledStepper
        currentStepIdx={currentStepIdx}
        onChange={this.change}
        {...this.props}
      />
    );
  }
}
