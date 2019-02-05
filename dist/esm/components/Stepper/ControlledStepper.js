import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
// TODO: Let's move this to applicaton level
import React, { PureComponent, Fragment } from 'react';
import {
  arrayOf,
  shape,
  string,
  number,
  node,
  oneOfType,
  func,
  bool,
} from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
export class ControlledStepper extends PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, 'setStep', (stepId) => {
      const { onChange } = this.props;
      onChange(stepId);
    });

    _defineProperty(this, 'nextStep', () => {
      const { currentStepIdx } = this.props;
      this.setStep(currentStepIdx + 1);
    });

    _defineProperty(this, 'prevStep', () => {
      const { currentStepIdx } = this.props;
      this.setStep(currentStepIdx - 1);
    });

    _defineProperty(this, 'renderNavigationStep', ({ id, label, disabled }) => {
      const { currentStepIdx } = this.props;
      const clickProps = disabled
        ? {}
        : {
            onClick: () => this.setStep(id),
          };
      const classes = classnames(
        `${OLT_NAMESPACE}Stepper-header`,
        id === currentStepIdx && 'is-active',
      );
      return React.createElement(
        'div',
        _extends(
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
        React.createElement('span', null, label),
      );
    });

    _defineProperty(this, 'renderContent', ({ id, content }) => {
      const { currentStepIdx } = this.props;
      const classes = classnames(
        `${OLT_NAMESPACE}Stepper-content`,
        id === currentStepIdx && 'is-active',
      );
      const contentBody =
        typeof content === 'function'
          ? content({
              setStep: this.setStep,
              nextStep: this.nextStep,
              previousStep: this.previousStep,
              currentStepIdx,
            })
          : content;
      return React.createElement(
        'div',
        {
          className: classes,
        },
        contentBody,
      );
    });
  }

  render() {
    const { className, steps } = this.props;
    const classes = classnames(`${OLT_NAMESPACE}Stepper`, className);
    return React.createElement(
      'section',
      {
        className: classes,
      },
      steps.map((x, i) =>
        React.createElement(
          Fragment,
          {
            key: `${x.id}`,
          },
          this.renderNavigationStep(x),
          this.renderContent(x),
        ),
      ),
    );
  }
}

_defineProperty(ControlledStepper, 'propTypes', {
  className: string,
  steps: arrayOf(
    shape({
      id: number.isRequired,
      label: string.isRequired,
      content: oneOfType([node, func]).isRequired,
      disabled: bool,
    }),
  ).isRequired,
  currentStepIdx: number,
  // eslint-disable-line
  onChange: func.isRequired,
});

_defineProperty(ControlledStepper, 'defaultProps', {
  className: null,
  currentStepIdx: undefined,
});
