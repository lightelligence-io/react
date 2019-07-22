import React, { useEffect } from 'react';
import { bool, node, func, oneOf, string, shape } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';
import { isServerSideRendering } from '../../utils/isServerSideRendering';
import { Button } from '../Button';
import {
  MODAL_TYPE_ERROR,
  MODAL_TYPE_SUCCESS,
  MODAL_TYPE_INFO,
  MODAL_TYPE_NONE,
} from './types';

export const Modal = ({
  children,
  title,
  type,
  open,
  closable,
  fullscreen,
  footer,
  onClose,
  className,
  dialogProps,
  modalProps,
  contentProps,
  footerProps,
  headerProps,
  closeButtonProps,
  ...props
}) => {
  useEffect(() => {
    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  }, [open]);

  const onClickProps = closable
    ? { onClick: (e) => e.target === e.currentTarget && onClose() }
    : {};

  const { className: modalClassName, ...otherModalProps } = modalProps;
  const { className: dialogClassName, ...otherDialogProps } = dialogProps;
  const { className: footerClassName, ...otherFooterProps } = footerProps;
  const { className: headerClassName, ...otherHeaderProps } = headerProps;
  const { className: contentClassName, ...otherContentProps } = contentProps;

  const finalModalProps = {
    ...otherModalProps,
    ...onClickProps,
  };
  return (
    <section
      className={classnames(
        olt.Modal,
        fullscreen && olt.ModalFullscreen,
        type !== MODAL_TYPE_NONE && olt[`Modal${pascalize(type)}`],
        open && olt.isOpen,
        className,
        modalClassName,
      )}
      {...finalModalProps}
    >
      <div
        className={classnames(olt.ModalDialog, dialogClassName)}
        {...{ ...props, ...otherDialogProps }}
      >
        {closable && !fullscreen && (
          <Button
            icon="close"
            className={olt.ModalClose}
            onClick={onClose}
            {...closeButtonProps}
          />
        )}
        {title && (
          <div
            className={classnames(olt.ModalHeader, headerClassName)}
            {...otherHeaderProps}
          >
            {title}
          </div>
        )}
        {children && (
          <div
            className={classnames(olt.ModalContent, contentClassName)}
            {...otherContentProps}
          >
            {children}
          </div>
        )}
        {footer && (
          <div
            className={classnames(olt.ModalFooter, footerClassName)}
            {...otherFooterProps}
          >
            {footer}
          </div>
        )}
      </div>
      {fullscreen && closable && (
        <Button
          icon="close"
          className={olt.ModalClose}
          onClick={onClose}
          {...closeButtonProps}
        />
      )}
    </section>
  );
};

Modal.propTypes = {
  children: node,
  title: node,
  type: oneOf([
    MODAL_TYPE_ERROR,
    MODAL_TYPE_SUCCESS,
    MODAL_TYPE_INFO,
    MODAL_TYPE_NONE,
  ]),
  open: bool.isRequired,
  footer: node,
  fullscreen: bool,
  onClose: func,
  closable: bool,
  className: string,
  dialogProps: shape({ className: string }),
  modalProps: shape({ className: string }),
  contentProps: shape({ className: string }),
  footerProps: shape({ className: string }),
  headerProps: shape({ className: string }),
  closeButtonProps: shape({}),
};

Modal.defaultProps = {
  title: null,
  children: null,
  type: MODAL_TYPE_NONE,
  fullscreen: false,
  footer: null,
  onClose: null,
  closable: false,
  className: null,
  dialogProps: {},
  modalProps: {},
  contentProps: {},
  footerProps: {},
  headerProps: {},
  closeButtonProps: {},
};
