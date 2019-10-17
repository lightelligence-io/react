import React, { useEffect } from 'react';
import { bool, node, oneOf, string, arrayOf, shape } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';
import { isServerSideRendering } from '../../utils/isServerSideRendering';

import {
  V2MODAL_TYPE_CRITICAL,
  V2MODAL_TYPE_SUCCESS,
  V2MODAL_TYPE_INFO,
  V2MODAL_TYPE_WARNING,
  V2MODAL_TYPE_ACTION,
} from './types';

export const V2Modal = ({
  type,
  wide,
  icon,
  title,
  content,
  actions,
  open,
  className,
  modalProps,
  dialogProps,
  headerProps,
  contentProps,
  footerProps,
  ...props
}) => {
  useEffect(() => {
    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  }, [open]);

  const { className: modalClassName, ...otherModalProps } = modalProps;
  const { className: dialogClassName, ...otherDialogProps } = dialogProps;
  const { className: footerClassName, ...otherFooterProps } = footerProps;
  const { className: headerClassName, ...otherHeaderProps } = headerProps;
  const { className: contentClassName, ...otherContentProps } = contentProps;

  return (
    <section
      className={classnames(
        olt.V2Modal,
        type && olt[`V2Modal${pascalize(type)}`],
        open && olt.isOpen,
        wide && olt.V2ModalWide,
        className,
        modalClassName,
      )}
      {...otherModalProps}
    >
      <div
        className={classnames(olt.V2ModalDialog, dialogClassName)}
        {...{ ...props, ...otherDialogProps }}
      >
        {
          <div
            className={classnames(
              olt.V2ModalHeader,
              icon && olt.V2ModalHeaderCustom,
              headerClassName,
            )}
            {...otherHeaderProps}
          >
            {icon}
            {title}
          </div>
        }
        {
          <div
            className={classnames(olt.V2ModalContent, contentClassName)}
            {...otherContentProps}
          >
            {content}
          </div>
        }
        <div
          className={classnames(olt.V2ModalFooter, footerClassName)}
          {...otherFooterProps}
        >
          {actions.map((action) => action)}
        </div>
      </div>
    </section>
  );
};

V2Modal.propTypes = {
  type: oneOf([
    V2MODAL_TYPE_CRITICAL,
    V2MODAL_TYPE_SUCCESS,
    V2MODAL_TYPE_INFO,
    V2MODAL_TYPE_WARNING,
    V2MODAL_TYPE_ACTION,
  ]),
  wide: bool,
  title: string,
  icon: node,
  content: node,
  open: bool.isRequired,
  actions: arrayOf(node),
  className: string,
  modalProps: shape({ className: string }),
  dialogProps: shape({ className: string }),
  headerProps: shape({ className: string }),
  contentProps: shape({ className: string }),
  footerProps: shape({ className: string }),
};

V2Modal.defaultProps = {
  type: null,
  wide: false,
  title: null,
  icon: null,
  content: '',
  actions: [],
  className: null,
  modalProps: {},
  dialogProps: {},
  headerProps: {},
  contentProps: {},
  footerProps: {},
};
