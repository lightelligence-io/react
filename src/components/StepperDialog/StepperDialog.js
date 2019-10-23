import React, { useRef, useEffect } from 'react';
import { bool, node, string, arrayOf, shape, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { isServerSideRendering } from '../../utils/isServerSideRendering';
import { ActionButton } from '../ActionButton';

export const StepperDialog = ({
  stepperHeader,
  steps,
  title,
  description,
  content,
  onClose,
  actions,
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
  const contentElement = useRef();

  useEffect(() => {
    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  }, [open]);

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
            2/5
          </div>
          {steps.map((step, index) => (
            <div
              className={classnames(
                olt.StepperDialogStepperStep,
                step.done && olt.StepperDialogStepperStepDone,
                step.current && olt.StepperDialogStepperStepCurrent,
                step.last ||
                  (index === steps.length - 1 &&
                    olt.StepperDialogStepperStepLast),
                stepperStepClassName,
              )}
              {...otherStepperStepProps}
            >
              {step.title}
            </div>
          ))}
        </div>
        <div
          className={classnames(
            olt.StepperDialogContent,
            stepperContentClassName,
          )}
          {...otherStepperContentProps}
        >
          <ActionButton
            onClick={handleClose}
            className={classnames(olt.DialogClose, closeClassName)}
            {...otherCloseProps}
          />
          {title && (
            <div
              className={classnames(olt.DialogTitle, titleClassName)}
              {...otherTitleProps}
            >
              {title}
            </div>
          )}
          {description && (
            <div
              className={classnames(
                olt.DialogDescription,
                descriptionClassName,
              )}
              {...otherDescriptionProps}
            >
              {description}
            </div>
          )}
          <div
            className={classnames(olt.DialogContent, contentClassName)}
            {...otherContentProps}
            ref={contentElement}
          >
            {content}
          </div>
          <div
            className={classnames(
              olt.DialogFooter,
              footerClassName,
              actions.length <= 0 && olt.uPaddingTop0,
            )}
            {...otherFooterProps}
          >
            {actions.map((action) => action)}
          </div>
        </div>
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
   * Steps of the stepper sidebar
   */
  steps: string,
  /**
   * Title of the dialog
   */
  title: string,
  /**
   * Description paragraph of the dialog
   */
  description: string,
  /**
   * Content to be rendered
   */
  content: node,
  /**
   * Flag to show or hide the dialog
   */
  open: bool.isRequired,
  /**
   * Callback, when the dialog is closed ('Esc' key, outside click, close icon)
   */
  onClose: func,
  /**
   * Array of buttons to show in the footer of the dialog
   */
  actions: arrayOf(node),
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
  steps: [],
  title: null,
  description: null,
  content: '',
  onClose: () => {},
  actions: [],
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
