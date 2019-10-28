import React, { useEffect } from 'react';
import { bool, node, string, arrayOf, shape, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { isServerSideRendering } from '../../utils/isServerSideRendering';
import { V2Button } from '../V2Button';

export const Dialog = ({
  title,
  description,
  content,
  onClose,
  actions,
  open,
  className,
  dialogProps,
  windowProps,
  closeProps,
  titleProps,
  descriptionProps,
  contentProps,
  footerProps,
  ...props
}) => {
  useEffect(() => {
    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  }, [open]);

  const { className: dialogClassName, ...otherDialogProps } = dialogProps;
  const { className: windowClassName, ...otherWindowProps } = windowProps;
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
        olt.Dialog,
        open && olt.isOpen,
        className,
        dialogClassName,
      )}
      {...otherDialogProps}
    >
      <div
        className={classnames(olt.DialogWindow, windowClassName)}
        {...props}
        {...otherWindowProps}
      >
        <V2Button
          onClick={() => typeof onClose === 'function' && onClose()}
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
            className={classnames(olt.DialogDescription, descriptionClassName)}
            {...otherDescriptionProps}
          >
            {description}
          </div>
        )}
        <div
          className={classnames(olt.DialogContent, contentClassName)}
          {...otherContentProps}
        >
          {content}
        </div>
        <div
          className={classnames(olt.DialogFooter, footerClassName)}
          {...otherFooterProps}
        >
          {actions.map((action) => action)}
        </div>
      </div>
    </section>
  );
};

Dialog.propTypes = {
  title: string,
  description: string,
  content: node,
  open: bool.isRequired,
  onClose: func,
  actions: arrayOf(node),
  className: string,
  dialogProps: shape({ className: string }),
  windowProps: shape({ className: string }),
  closeProps: shape({ className: string }),
  titleProps: shape({ className: string }),
  descriptionProps: shape({ className: string }),
  contentProps: shape({ className: string }),
  footerProps: shape({ className: string }),
};

Dialog.defaultProps = {
  title: null,
  description: null,
  content: '',
  onClose: () => {},
  actions: [],
  className: null,
  dialogProps: {},
  windowProps: {},
  closeProps: {},
  titleProps: {},
  descriptionProps: {},
  contentProps: {},
  footerProps: {},
};
