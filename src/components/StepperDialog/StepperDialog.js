import React, { useRef, useState, useEffect } from 'react';
import { bool, string, number, shape, node, func, arrayOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { isServerSideRendering } from '../../utils/isServerSideRendering';
import { ActionButton } from '../ActionButton';
import { Button } from '../Button';

export const StepperDialog = ({
  stepperHeader,
  steps,
  activeStep,
  onClose,
  onProceed,
  onFinish,
  onBack,
  proceedButton,
  backButton,
  open,
  className,
  dialogProps,
  windowProps,
  stepperProps,
  stepperHeaderProps,
  stepperCounterProps,
  stepperStepProps,
  stepperContentProps,
  closeProps,
  titleProps,
  descriptionProps,
  contentProps,
  footerProps,
  ...props
}) => {
  const dialogElement = useRef();
  const proceedButtonRef = useRef();
  const backButtonRef = useRef();

  const [currentStep, setCurrentStep] = useState(activeStep);

  useEffect(() => {
    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  // if the current step is handled from the outside, then (re-)set it on opening the dialog
  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep, open]);

  const handleClickOutside = (event) => {
    if (
      open &&
      dialogElement.current &&
      !dialogElement.current.contains(event.target)
    ) {
      handleClose();
      event.preventDefault();
    }
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape' && open) {
      handleClose();
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleEscKey, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscKey, false);
    };
  });

  const handleClose = () => {
    if (typeof onClose === 'function') onClose();
    if (!activeStep) setCurrentStep(0); // reset only if it is not handled from the outside
  };

  const handleProceed = () => {
    if (typeof onProceed === 'function') onProceed(currentStep + 1);
    if (currentStep === steps.length - 1) {
      if (typeof onFinish === 'function') {
        if (!activeStep) setCurrentStep(0); // reset only if it is not handled from the outside
        onFinish();
      }
      return;
    }
    setCurrentStep(currentStep + 1);
    if (proceedButtonRef && proceedButtonRef.current)
      proceedButtonRef.current.blur();
  };
  const handleBack = () => {
    if (typeof onBack === 'function') onBack(currentStep - 1);
    setCurrentStep(currentStep - 1);
    if (backButtonRef && backButtonRef.current) backButtonRef.current.blur();
  };

  const { className: dialogClassName, ...otherDialogProps } = dialogProps;
  const { className: windowClassName, ...otherWindowProps } = windowProps;
  const { className: stepperClassName, ...otherStepperProps } = stepperProps;
  const {
    className: stepperHeaderClassName,
    ...otherStepperHeaderProps
  } = stepperHeaderProps;
  const {
    className: stepperCounterClassName,
    ...otherStepperCounterProps
  } = stepperCounterProps;
  const {
    className: stepperStepClassName,
    ...otherStepperStepProps
  } = stepperStepProps;
  const {
    className: stepperContentClassName,
    ...otherStepperContentProps
  } = stepperContentProps;
  const { className: closeClassName, ...otherCloseProps } = closeProps;
  const { className: titleClassName, ...otherTitleProps } = titleProps;
  const {
    className: descriptionClassName,
    ...otherDescriptionProps
  } = descriptionProps;
  const { className: contentClassName, ...otherContentProps } = contentProps;
  const { className: footerClassName, ...otherFooterProps } = footerProps;

  // TODO: define reusable colors
  const renderStepper = () => (
    <div
      className={classnames(olt.StepperDialogStepper, stepperClassName)}
      {...otherStepperProps}
    >
      <div
        className={classnames(
          olt.StepperDialogStepperHeader,
          stepperHeaderClassName,
        )}
        {...otherStepperHeaderProps}
      >
        {stepperHeader}
      </div>
      <div
        className={classnames(
          olt.StepperDialogStepperCounter,
          stepperCounterClassName,
        )}
        {...otherStepperCounterProps}
      >
        <div style={{ height: '42px', width: '42px' }}>
          <CircularProgressbar
            value={currentStep + 1 / steps.length}
            maxValue={steps.length - 1}
            text={`${currentStep + 1} / ${steps.length}`}
            styles={buildStyles({
              pathColor: '#02BF1B',
              trailColor: '#E3E4E5',
              textColor: '#212529',
              textSize: '24px',
            })}
          />
        </div>
      </div>
      {steps.map((step, index) => renderStepperStep(step, index))}
    </div>
  );

  const renderStepperStep = (step, index) => (
    <div
      key={index}
      className={classnames(
        olt.StepperDialogStepperStep,
        index < currentStep && olt.StepperDialogStepperStepDone,
        index === currentStep && olt.StepperDialogStepperStepCurrent,
        index === steps.length - 1 && olt.StepperDialogStepperStepLast,
        stepperStepClassName,
      )}
      {...otherStepperStepProps}
    >
      {step.title}
    </div>
  );

  const renderContentContainer = () => (
    <div
      className={classnames(olt.StepperDialogContent, stepperContentClassName)}
      {...otherStepperContentProps}
    >
      <ActionButton
        onClick={handleClose}
        className={classnames(olt.DialogClose, closeClassName)}
        {...otherCloseProps}
      />
      {renderContent()}
      <div
        className={classnames(olt.DialogFooter, footerClassName)}
        {...otherFooterProps}
      >
        {!backButton.disabled && currentStep > 0 && (
          <Button
            emphasis="tertiary"
            onClick={handleBack}
            {...backButton.props}
            ref={backButtonRef}
          >
            {backButton.label || 'Back'}
          </Button>
        )}
        {currentStep <= steps.length - 1 && (
          <Button
            buttonType="action"
            onClick={handleProceed}
            disabled={proceedButton.disabled}
            {...proceedButton.props}
            ref={proceedButtonRef}
          >
            {proceedButton.label || 'Proceed'}
          </Button>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    const current = steps[currentStep].dialog;
    return (
      <>
        {current.title && (
          <div
            className={classnames(olt.DialogTitle, titleClassName)}
            {...otherTitleProps}
          >
            {current.title}
          </div>
        )}
        {current.description && (
          <div
            className={classnames(olt.DialogDescription, descriptionClassName)}
            {...otherDescriptionProps}
          >
            {current.description}
          </div>
        )}
        <div
          className={classnames(olt.DialogContent, contentClassName)}
          {...otherContentProps}
        >
          {current.content}
        </div>
      </>
    );
  };

  return (
    <section
      className={classnames(
        olt.StepperDialog,
        open && olt.isOpen,
        className,
        dialogClassName,
      )}
      {...otherDialogProps}
    >
      <div
        className={classnames(olt.StepperDialogWindow, windowClassName)}
        {...props}
        {...otherWindowProps}
        ref={dialogElement}
      >
        {renderStepper()}
        {renderContentContainer()}
      </div>
    </section>
  );
};

StepperDialog.propTypes = {
  /**
   * Header of the stepper sidebar
   */
  stepperHeader: string,
  /**
   * Set the active step.
   */
  activeStep: number,
  /**
   * Steps of the stepper sidebar
   */
  steps: arrayOf(
    shape({
      title: string,
      content: shape({ title: string, description: string, content: node }),
    }),
  ),
  /**
   * Flag to show or hide the dialog
   */
  open: bool.isRequired,
  /**
   * Callback, when the dialog is closed ('Esc' key, outside click, close icon)
   */
  onClose: func,
  /**
   * Callback, when the user proceeds to the next step
   * @param The index of the next step.
   */
  onProceed: func,
  /**
   * Callback, when all steps are done
   */
  onFinish: func,
  /**
   * Callback, when the user goes back
   * @param The index of the step the user returns to.
   */
  onBack: func,
  /**
   * Disable the proceed button.
   */
  proceedButton: shape({
    disabled: bool,
    label: string,
    props: shape({ className: string }),
  }),
  /**
   * disable the back button (it will not be rendered).
   */
  backButton: shape({
    disabled: bool,
    label: string,
    props: shape({ className: string }),
  }),
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * Props for the overall dialog (including the dark background)
   */
  dialogProps: shape({ className: string }),
  /**
   * Props for the dialog window
   */
  windowProps: shape({ className: string }),
  /**
   * Props for the stepper
   */
  stepperProps: shape({ className: string }),
  /**
   * Props for the stepper header
   */
  stepperHeaderProps: shape({ className: string }),
  /**
   * Props for the stepper counter
   */
  stepperCounterProps: shape({ className: string }),
  /**
   * Props for each step of the stepper
   */
  stepperStepProps: shape({ className: string }),
  /**
   * Props for the content container of the dialog
   */
  stepperContentProps: shape({ className: string }),
  /**
   * Props for the close button
   */
  closeProps: shape({ className: string }),
  /**
   * Props for the title string
   */
  titleProps: shape({ className: string }),
  /**
   * Props for the description paragraph
   */
  descriptionProps: shape({ className: string }),
  /**
   * Props for the content container
   */
  contentProps: shape({ className: string }),
  /**
   * Props for the footer (containing the buttons)
   */
  footerProps: shape({ className: string }),
};

StepperDialog.defaultProps = {
  stepperHeader: null,
  activeStep: 0,
  steps: [],
  onClose: () => {},
  onProceed: () => {},
  onFinish: () => {},
  onBack: () => {},
  proceedButton: {},
  backButton: {},
  className: null,
  dialogProps: {},
  windowProps: {},
  stepperProps: {},
  stepperHeaderProps: {},
  stepperCounterProps: {},
  stepperStepProps: {},
  stepperContentProps: {},
  closeProps: {},
  titleProps: {},
  descriptionProps: {},
  contentProps: {},
  footerProps: {},
};
