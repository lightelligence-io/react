import React, { useEffect } from 'react';
import { bool, node, oneOf, string, arrayOf, shape } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';
import { isServerSideRendering } from '../../utils/isServerSideRendering';

export const Modal = ({
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
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const { className: modalClassName, ...otherModalProps } = modalProps;
  const { className: dialogClassName, ...otherDialogProps } = dialogProps;
  const { className: footerClassName, ...otherFooterProps } = footerProps;
  const { className: headerClassName, ...otherHeaderProps } = headerProps;
  const { className: contentClassName, ...otherContentProps } = contentProps;

  return (
    <section
      className={classnames(
        olt.Modal,
        type && olt[`Modal${pascalize(type)}`],
        open && olt.isOpen,
        wide && olt.ModalWide,
        className,
        modalClassName,
      )}
      {...otherModalProps}
    >
      <div
        className={classnames(olt.ModalDialog, dialogClassName)}
        {...props}
        {...otherDialogProps}
      >
        {
          <div
            className={classnames(
              olt.ModalHeader,
              icon && olt.ModalHeaderCustom,
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
            className={classnames(olt.ModalContent, contentClassName)}
            {...otherContentProps}
          >
            {content}
          </div>
        }
        <div
          className={classnames(olt.ModalFooter, footerClassName)}
          {...otherFooterProps}
        >
          {actions.map((action) => action)}
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  type: oneOf(['critical', 'success', 'info', 'warning', 'action']),
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

Modal.defaultProps = {
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
