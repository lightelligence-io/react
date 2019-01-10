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
  static propTypes = {
    className: string,
    steps: arrayOf(
      shape({
        id: number.isRequired,
        label: string.isRequired,
        content: oneOfType([node, func]).isRequired,
        disabled: bool,
      }),
    ).isRequired,
    currentStepIdx: number, // eslint-disable-line
    onChange: func.isRequired,
  };

  static defaultProps = {
    className: null,
    currentStepIdx: undefined,
  };

  setStep = (stepId) => {
    const { onChange } = this.props;
    onChange(stepId);
  };

  nextStep = () => {
    const { currentStepIdx } = this.props;
    this.setStep(currentStepIdx + 1);
  };

  prevStep = () => {
    const { currentStepIdx } = this.props;
    this.setStep(currentStepIdx - 1);
  };

  renderNavigationStep = ({ id, label, disabled }) => {
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
    return (
      <div
        className={classes}
        role="presentation"
        disabled={disabled}
        {...clickProps}
        style={{ marginTop: 20, marginBottom: 10 }}
      >
        <span>{label}</span>
      </div>
    );
  };

  renderContent = ({ id, content }) => {
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
    return <div className={classes}>{contentBody}</div>;
  };

  render() {
    const { className, steps } = this.props;
    const classes = classnames(`${OLT_NAMESPACE}Stepper`, className);

    return (
      <section className={classes}>
        {steps.map((x, i) => (
          <Fragment key={`${x.id}`}>
            {this.renderNavigationStep(x)}
            {this.renderContent(x)}
          </Fragment>
        ))}
      </section>
    );
  }
}
