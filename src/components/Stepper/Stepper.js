import React, { PureComponent } from 'react';
import { number } from 'prop-types';

import { ControlledStepper } from './ControlledStepper';

export class Stepper extends PureComponent {
  static getDerivedStateFromProps({ currentStepIdx }, state) {
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
    const { currentStepIdx, ...props } = this.props;
    const { currentStepIdx: currentStepIdxState } = this.state;
    return (
      <ControlledStepper
        currentStepIdx={currentStepIdxState}
        onChange={this.change}
        {...props}
      />
    );
  }
}

Stepper.propTypes = {
  currentStepIdx: number,
};

Stepper.defaultProps = {
  currentStepIdx: null,
};
