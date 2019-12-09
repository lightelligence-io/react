import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { Button } from '../Button';
import { Dialog } from './Dialog';

const renderDialog = (props) => {
  return render(
    <Dialog
      title="Titel!"
      description="Description..."
      open={false}
      content="Lorem ipsum dolor sit amet"
      actions={[]}
      dialogProps={{
        'data-testid': 'dialog',
      }}
      windowProps={{
        'data-testid': 'window',
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
      {...props}
    />,
  );
};

describe('Dialog', () => {
  test('has the dialog uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const modal = getByTestId('dialog');
    expect(modal.classList.contains(oltStyles.Dialog)).toBe(true);
  });
  test('has the dialog window uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const window = getByTestId('window');
    expect(window.classList.contains(oltStyles.DialogWindow)).toBe(true);
  });
  test('has the dialog close uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const close = getByTestId('close');
    expect(close.classList.contains(oltStyles.DialogClose)).toBe(true);
  });
  test('has the dialog title uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const title = getByTestId('title');
    expect(title.classList.contains(oltStyles.DialogTitle)).toBe(true);
  });
  test('has the dialog description uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const description = getByTestId('description');
    expect(description.classList.contains(oltStyles.DialogDescription)).toBe(
      true,
    );
  });
  test('has the dialog content uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const content = getByTestId('content');
    expect(content.classList.contains(oltStyles.DialogContent)).toBe(true);
  });
  test('has the dialog footer uses the right classes from styles', () => {
    const { getByTestId } = renderDialog();
    const footer = getByTestId('footer');
    expect(footer.classList.contains(oltStyles.DialogFooter)).toBe(true);
  });
  test('sets isOpen', () => {
    const { getByTestId } = renderDialog({
      open: true,
    });
    const dialog = getByTestId('dialog');
    expect(dialog.classList.contains(oltStyles.isOpen)).toBe(true);
  });

  test('triggers onClick', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderDialog({
      actions: [
        <Button key="ok" buttonType="action" onClick={onClick}>
          Ok
        </Button>,
      ],
    });
    const footer = getByTestId('footer');
    const button = footer.getElementsByTagName('button')[0];
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test('triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = renderDialog({
      onClose,
    });
    const close = getByTestId('close');
    fireEvent.click(close);
    expect(onClose).toHaveBeenCalled();
  });

  test('ESC triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = renderDialog({
      onClose,
      open: true,
    });
    const dialog = getByTestId('dialog');
    fireEvent.keyDown(dialog, { key: 'Escape', code: 27 });
    expect(onClose).toHaveBeenCalled();
  });

  test('outside click triggers onClose', () => {
    const onClose = jest.fn();
    const { getByTestId } = renderDialog({
      onClose,
      open: true,
    });
    const dialog = getByTestId('dialog');
    fireEvent.click(dialog);
    expect(onClose).toHaveBeenCalled();
  });
});
