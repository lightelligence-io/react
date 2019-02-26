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
import * as olt from '@lightelligence/lightelligence-ui';

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
      olt.StepperHeader,
      id === currentStepIdx && olt.isActive,
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
      olt.StepperContent,
      id === currentStepIdx && olt.isActive,
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
    const classes = classnames(olt.Stepper, className);

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
