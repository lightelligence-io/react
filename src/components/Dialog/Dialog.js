import React, { useRef, useEffect } from 'react';
import { bool, node, string, arrayOf, shape, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { isServerSideRendering } from '../../utils/isServerSideRendering';
import { ActionButton } from '../ActionButton';

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
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const handleClose = () => {
    if (typeof onClose === 'function') onClose();
  };

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
        ref={dialogElement}
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
            className={classnames(olt.DialogDescription, descriptionClassName)}
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
