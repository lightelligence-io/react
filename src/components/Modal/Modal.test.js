import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { Modal } from './Modal';

const renderModal = (props) => {
  return render(
    <Modal
      title="All will be fine"
      open={false}
      content="Lorem ipsum dolor sit amet"
      actions={[]}
      modalProps={{
        'data-testid': 'modal',
      }}
      dialogProps={{
        'data-testid': 'dialog',
      }}
      headerProps={{
        'data-testid': 'header',
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

describe('Modal', () => {
  test('has the model uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.Modal)).toBe(true);
  });
  test('has the model dialog uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('dialog');
    expect(modal.classList.contains(oltStyles.ModalDialog)).toBe(true);
  });
  test('has the model header uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('header');
    expect(modal.classList.contains(oltStyles.ModalHeader)).toBe(true);
  });
  test('has the model content uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('content');
    expect(modal.classList.contains(oltStyles.ModalContent)).toBe(true);
  });
  test('has the model footer uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('footer');
    expect(modal.classList.contains(oltStyles.ModalFooter)).toBe(true);
  });
  test('sets isOpen', () => {
    const { getByTestId } = renderModal({
      open: true,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.isOpen)).toBe(true);
  });

  test('triggers onClick', () => {
    const onClick = jest.fn();
    const { getByTestId } = renderModal({
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
  test('renders critical modifier', () => {
    const { getByTestId } = renderModal({
      type: 'critical',
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.ModalCritical)).toBe(true);
  });
  test('renders warning modifier', () => {
    const { getByTestId } = renderModal({
      type: 'warning',
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.ModalWarning)).toBe(true);
  });
  test('renders info modifier', () => {
    const { getByTestId } = renderModal({
      type: 'info',
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.ModalInfo)).toBe(true);
  });
  test('renders success modifier', () => {
    const { getByTestId } = renderModal({
      type: 'success',
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.ModalSuccess)).toBe(true);
  });
  test('renders action modifier', () => {
    const { getByTestId } = renderModal({
      type: 'action',
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.ModalAction)).toBe(true);
  });
  test('renders custom icons ', () => {
    const { getByTestId } = renderModal({
      icon: <Icon name="add-default" color="primary" />,
    });
    const header = getByTestId('header');
    const icon = header.getElementsByTagName('i')[0];
    expect(icon.classList.contains(oltStyles.Icon)).toBe(true);
    expect(icon.classList.contains(oltStyles.uColorPrimary)).toBe(true);
    expect(icon.classList.contains(oltStyles.IconAddDefault)).toBe(true);
  });
  test('renders wide modals ', () => {
    const { getByTestId } = renderModal({
      wide: true,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.ModalWide)).toBe(true);
  });
});
