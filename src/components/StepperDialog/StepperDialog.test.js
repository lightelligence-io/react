import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';
import { StepperDialog } from './StepperDialog';

const singleStep = [
  {
    title: 'stepTitel1',
    dialog: {
      title: 'title1',
      description: 'description1',
      content: 'content1',
    },
  },
];

const multiStep = [
  {
    title: 'stepTitel',
    dialog: {
      title: 'title1',
      description: 'description1',
      content: 'content1',
    },
  },
  {
    title: 'stepTitel',
    dialog: {
      title: 'title2',
      description: 'description2',
      content: 'content2',
    },
  },
  {
    title: 'stepTitel',
    dialog: {
      title: 'title3',
      description: 'description3',
      content: 'content3',
    },
  },
];

// eslint-disable-next-line react/prop-types
const createDialog = ({ proceedButton, backButton, ...props } = {}) => (
  <StepperDialog
    stepperHeader="The Step Stepper of Steps"
    steps={singleStep}
    open={false}
    dialogProps={{
      'data-testid': 'dialog',
    }}
    windowProps={{
      'data-testid': 'window',
    }}
    stepperProps={{
      'data-testid': 'stepper',
    }}
    stepperHeaderProps={{
      'data-testid': 'stepperHeader',
    }}
    stepperCounterProps={{
      'data-testid': 'stepperCounter',
    }}
    stepperStepProps={{
      'data-testid': 'stepperStep',
    }}
    stepperContentProps={{
      'data-testid': 'stepperContent',
    }}
    closeProps={{
      'data-testid': 'close',
    }}
    titleProps={{
      'data-testid': 'title',
    }}
    descriptionProps={{
      'data-testid': 'description',
    }}
    contentProps={{
      'data-testid': 'content',
    }}
    footerProps={{
      'data-testid': 'footer',
    }}
    proceedButton={{
      props: {
        'data-testid': 'proceedButton',
      },
      ...proceedButton,
    }}
    backButton={{
      props: {
        'data-testid': 'backButton',
      },
      ...backButton,
    }}
    {...props}
  />
);

describe('StepperDialog - Styles', () => {
  test('dialog uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const modal = getByTestId('dialog');
    expect(modal.classList.contains(oltStyles.StepperDialog)).toBe(true);
  });
  test('window uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const window = getByTestId('window');
    expect(window.classList.contains(oltStyles.StepperDialogWindow)).toBe(true);
  });
  test('stepper uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const stepper = getByTestId('stepper');
    expect(stepper.classList.contains(oltStyles.StepperDialogStepper)).toBe(
      true,
    );
  });
  test('stepperHeader uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const stepperHeader = getByTestId('stepperHeader');
    expect(
      stepperHeader.classList.contains(oltStyles.StepperDialogStepperHeader),
    ).toBe(true);
  });
  test('stepperCounter uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const stepperCounter = getByTestId('stepperCounter');
    expect(
      stepperCounter.classList.contains(oltStyles.StepperDialogStepperCounter),
    ).toBe(true);
  });
  test('stepperStep uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const stepperStep = getByTestId('stepperStep');
    expect(
      stepperStep.classList.contains(oltStyles.StepperDialogStepperStep),
    ).toBe(true);
  });
  test('first stepperStep uses the right classes from styles', () => {
    const { queryAllByText } = render(
      createDialog({
        steps: multiStep,
      }),
    );
    const steps = queryAllByText('stepTitel');
    expect(
      steps[0].classList.contains(oltStyles.StepperDialogStepperStepCurrent),
    ).toBe(true);
  });
  test('last stepperStep uses the right classes from styles', () => {
    const { queryAllByText } = render(
      createDialog({
        steps: multiStep,
      }),
    );
    const steps = queryAllByText('stepTitel');
    expect(
      steps[multiStep.length - 1].classList.contains(
        oltStyles.StepperDialogStepperStepLast,
      ),
    ).toBe(true);
  });
  test('stepperContent uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const stepperContent = getByTestId('stepperContent');
    expect(
      stepperContent.classList.contains(oltStyles.StepperDialogContent),
    ).toBe(true);
  });
  test('dialog close uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const close = getByTestId('close');
    expect(close.classList.contains(oltStyles.DialogClose)).toBe(true);
  });
  test('dialog title uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const title = getByTestId('title');
    expect(title.classList.contains(oltStyles.DialogTitle)).toBe(true);
  });
  test('dialog description uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const description = getByTestId('description');
    expect(description.classList.contains(oltStyles.DialogDescription)).toBe(
      true,
    );
  });
  test('dialog content uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const content = getByTestId('content');
    expect(content.classList.contains(oltStyles.DialogContent)).toBe(true);
  });
  test('proceed button uses the right classes from styles', () => {
    const { getByTestId } = render(createDialog());
    const proceedButton = getByTestId('proceedButton');
    expect(proceedButton.classList.contains(oltStyles.Button)).toBe(true);
    expect(proceedButton.classList.contains(oltStyles.ButtonAction)).toBe(true);
  });
  test('back button uses the right classes from styles', () => {
    const { getByTestId } = render(
      createDialog({
        steps: multiStep,
        activeStep: 1,
      }),
    );
    const backButton = getByTestId('backButton');
    expect(backButton.classList.contains(oltStyles.ButtonTertiary)).toBe(true);
  });
});

describe('StepperDialog - Props', () => {
  test('sets isOpen', () => {
    const { getByTestId } = render(
      createDialog({
        open: true,
      }),
    );
    const dialog = getByTestId('dialog');
    expect(dialog.classList.contains(oltStyles.isOpen)).toBe(true);
  });
  test('stepper header is set', () => {
    const { getByText } = render(
      createDialog({
        stepperHeader: 'new Header',
      }),
    );
    const stepperHeader = getByText('new Header');
    expect(
      stepperHeader.classList.contains(oltStyles.StepperDialogStepperHeader),
    ).toBe(true);
  });
  test('steps are set', () => {
    const { queryAllByText } = render(
      createDialog({
        steps: multiStep,
      }),
    );
    const steps = queryAllByText('stepTitel');
    expect(steps.length).toBe(multiStep.length);
  });
  test('active step is set', () => {
    const activeStep = 1;
    const { queryAllByText } = render(
      createDialog({
        activeStep,
        steps: multiStep,
      }),
    );
    const steps = queryAllByText('stepTitel');
    expect(
      steps[activeStep - 1].classList.contains(
        oltStyles.StepperDialogStepperStepDone,
      ),
    ).toBe(true);
    expect(
      steps[activeStep].classList.contains(
        oltStyles.StepperDialogStepperStepCurrent,
      ),
    ).toBe(true);
  });
  test('sets proceedButton label', () => {
    const { getByText } = render(
      createDialog({
        proceedButton: { label: 'new proceed label' },
      }),
    );
    const proceedButton = getByText('new proceed label');
    expect(proceedButton.classList.contains(oltStyles.ButtonAction)).toBe(true);
  });
  test('disables proceedButton', () => {
    const { getByTestId } = render(
      createDialog({
        proceedButton: { disabled: true },
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    expect(proceedButton.disabled).toBe(true);
  });
  test('sets backButton label', () => {
    const { getByText } = render(
      createDialog({
        steps: multiStep,
        activeStep: 1,
        backButton: { label: 'new back label' },
      }),
    );
    const backButton = getByText('new back label');
    expect(backButton.classList.contains(oltStyles.ButtonTertiary)).toBe(true);
  });
  test('disables backButton', () => {
    const { queryByTestId } = render(
      createDialog({
        steps: multiStep,
        activeStep: 1,
        backButton: { disabled: true },
      }),
    );
    expect(queryByTestId('backButton')).toBeNull();
  });
  test('no backButton on first step', () => {
    const { queryByTestId } = render(
      createDialog({
        steps: multiStep,
        activeStep: 0,
      }),
    );
    expect(queryByTestId('backButton')).toBeNull();
  });
});

describe('StepperDialog - Callbacks', () => {
  test('triggers onProceed', () => {
    const onProceed = jest.fn();
    const { getByTestId } = render(
      createDialog({
        onProceed,
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    fireEvent.click(proceedButton);
    expect(onProceed).toHaveBeenCalledTimes(1);
    expect(onProceed).toHaveBeenCalledWith(1);
  });

  test('triggers onBack', () => {
    const onBack = jest.fn();
    const { getByTestId } = render(
      createDialog({
        steps: multiStep,
        activeStep: 1,
        onBack,
      }),
    );
    const backButton = getByTestId('backButton');
    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalledTimes(1);
    expect(onBack).toHaveBeenCalledWith(0);
  });

  test('triggers onFinish', () => {
    const onFinish = jest.fn();
    const { getByTestId } = render(
      createDialog({
        onFinish,
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    fireEvent.click(proceedButton);
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onFinish).toHaveBeenCalledWith();
  });

  test('onFinish resets the step counter for uncontrolled steppers', () => {
    const onProceed = jest.fn();
    const onFinish = jest.fn();
    const { getByTestId, rerender } = render(
      createDialog({
        steps: multiStep,
        onProceed,
        onFinish,
        open: true,
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    fireEvent.click(proceedButton);
    fireEvent.click(proceedButton);
    fireEvent.click(proceedButton);
    expect(onFinish).toHaveBeenCalledTimes(1);
    rerender(
      createDialog({
        steps: multiStep,
        onProceed,
        onFinish,
        open: true,
      }),
    );
    fireEvent.click(proceedButton);
    expect(onProceed).toHaveBeenCalledTimes(4);
    expect(onProceed).toHaveBeenCalledWith(1);
    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  test('onFinish does not reset the step counter for controlled steppers', () => {
    const onProceed = jest.fn();
    const onFinish = jest.fn();
    const { getByTestId, rerender } = render(
      createDialog({
        steps: multiStep,
        onProceed,
        onFinish,
        open: true,
        activeStep: 1,
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    fireEvent.click(proceedButton);
    fireEvent.click(proceedButton);
    expect(onFinish).toHaveBeenCalledTimes(1);
    rerender(
      createDialog({
        steps: multiStep,
        onProceed,
        onFinish,
        open: true,
        activeStep: 1,
      }),
    );
    fireEvent.click(proceedButton);
    expect(onProceed).toHaveBeenCalledTimes(3);
    expect(onProceed).toHaveBeenCalledWith(3);
    expect(onFinish).toHaveBeenCalledTimes(2);
  });

  test('triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      createDialog({
        onClose,
      }),
    );
    const close = getByTestId('close');
    fireEvent.click(close);
    expect(onClose).toHaveBeenCalled();
  });

  test('ESC triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      createDialog({
        onClose,
        open: true,
      }),
    );
    const dialog = getByTestId('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape', code: 27 });
    expect(onClose).toHaveBeenCalled();
  });

  test('outside click triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      createDialog({
        onClose,
        open: true,
      }),
    );
    const dialog = getByTestId('dialog');
    fireEvent.click(dialog);
    expect(onClose).toHaveBeenCalled();
  });

  test('onClose resets the step counter for uncontrolled steppers', () => {
    const onProceed = jest.fn();
    const { getByTestId, rerender } = render(
      createDialog({
        steps: multiStep,
        onProceed,
        open: true,
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    const closeButton = getByTestId('close');
    fireEvent.click(proceedButton);
    fireEvent.click(closeButton);
    rerender(
      createDialog({
        steps: multiStep,
        onProceed,
        open: true,
      }),
    );
    fireEvent.click(proceedButton);
    expect(onProceed).toHaveBeenCalledTimes(2);
    expect(onProceed).toHaveBeenCalledWith(1);
  });

  test('onClose does not reset the step counter for controlled steppers', () => {
    const onProceed = jest.fn();
    const { getByTestId, rerender } = render(
      createDialog({
        steps: multiStep,
        onProceed,
        open: true,
        activeStep: 1,
      }),
    );
    const proceedButton = getByTestId('proceedButton');
    const closeButton = getByTestId('close');
    fireEvent.click(proceedButton);
    fireEvent.click(closeButton);
    rerender(
      createDialog({
        steps: multiStep,
        onProceed,
        open: true,
        activeStep: 1,
      }),
    );
    fireEvent.click(proceedButton);
    expect(onProceed).toHaveBeenCalledTimes(2);
    expect(onProceed).toHaveBeenCalledWith(2);
  });
});
