import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { oltStyles } from '../..';

import { Icon } from '../Icon';
import { V2Button } from '../V2Button';
import { V2Modal } from './V2Modal';
import {
  V2MODAL_TYPE_CRITICAL,
  V2MODAL_TYPE_SUCCESS,
  V2MODAL_TYPE_INFO,
  V2MODAL_TYPE_WARNING,
  V2MODAL_TYPE_ACTION,
} from './types';

const renderModal = (props) => {
  return render(
    <V2Modal
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

describe('V2Modal', () => {
  test('has the model uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2Modal)).toBe(true);
  });
  test('has the model dialog uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('dialog');
    expect(modal.classList.contains(oltStyles.V2ModalDialog)).toBe(true);
  });
  test('has the model header uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('header');
    expect(modal.classList.contains(oltStyles.V2ModalHeader)).toBe(true);
  });
  test('has the model content uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('content');
    expect(modal.classList.contains(oltStyles.V2ModalContent)).toBe(true);
  });
  test('has the model footer uses the right classes from styles', () => {
    const { getByTestId } = renderModal();
    const modal = getByTestId('footer');
    expect(modal.classList.contains(oltStyles.V2ModalFooter)).toBe(true);
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
        <V2Button key="ok" buttonType="action" onClick={onClick}>
          Ok
        </V2Button>,
      ],
    });
    const footer = getByTestId('footer');
    const button = footer.getElementsByTagName('button')[0];
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  test('renders critical modifier', () => {
    const { getByTestId } = renderModal({
      type: V2MODAL_TYPE_CRITICAL,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2ModalCritical)).toBe(true);
  });
  test('renders warning modifier', () => {
    const { getByTestId } = renderModal({
      type: V2MODAL_TYPE_WARNING,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2ModalWarning)).toBe(true);
  });
  test('renders info modifier', () => {
    const { getByTestId } = renderModal({
      type: V2MODAL_TYPE_INFO,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2ModalInfo)).toBe(true);
  });
  test('renders success modifier', () => {
    const { getByTestId } = renderModal({
      type: V2MODAL_TYPE_SUCCESS,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2ModalSuccess)).toBe(true);
  });
  test('renders action modifier', () => {
    const { getByTestId } = renderModal({
      type: V2MODAL_TYPE_ACTION,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2ModalAction)).toBe(true);
  });
  test('renders custom icons ', () => {
    const { getByTestId } = renderModal({
      icon: <Icon name="add-default" color="primary" />,
    });
    const header = getByTestId('header');
    const icon = header.getElementsByTagName('i')[0];
    expect(icon.classList.contains(oltStyles.Icon)).toBe(true);
    expect(icon.classList.contains(oltStyles.IconPrimary)).toBe(true);
    expect(icon.classList.contains(oltStyles.IconActionAddDefault)).toBe(true);
  });
  test('renders wide modals ', () => {
    const { getByTestId } = renderModal({
      wide: true,
    });
    const modal = getByTestId('modal');
    expect(modal.classList.contains(oltStyles.V2ModalWide)).toBe(true);
  });
});
