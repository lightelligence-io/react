import React, { useEffect, useRef } from 'react';
// import React, { useState, useEffect } from 'react';
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
  const dialogWindow = useRef();

  useEffect(() => {
    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  }, [open]);

  const handleClickOutside = (event) => {
    if (
      open &&
      dialogWindow.current &&
      !dialogWindow.current.contains(event.target)
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
  // const [contentHeight, setContentHeight] = useState(null);
  // useEffect(() => {
  //   const dialogWindow = document.querySelector(`.${olt.DialogWindow}`);
  //   const contentWrapper = document.querySelector(`.${olt.DialogContent}`);
  //   const sizeWrapper = document.querySelector('.sizeMeasuringWrapper');

  //   if (!contentHeight) {
  //     setContentHeight({
  //       height: contentWrapper.clientHeight,
  //       diff:  sizeWrapper.clientHeight - contentWrapper.clientHeight,
  //     });
  //     return
  //   }

  // console.log('contentHeight', contentHeight)
  // console.log('content clientHeight', contentWrapper.clientHeight)
  // console.log('size clientHeight', sizeWrapper.clientHeight)
  // console.log('dialogWindow.style.height', dialogWindow.style.height)

  // if (contentHeight.height < contentWrapper.clientHeight) {
  //   setContentHeight({height: contentWrapper.clientHeight, diff: contentHeight.diff});
  //   const growTo = contentWrapper.clientHeight + contentHeight.diff
  //   // console.log('growing to', growTo)
  //   dialogWindow.style.height = `${growTo}px`;
  // }
  // if (contentHeight.height > contentWrapper.clientHeight) {
  //   setContentHeight({height: contentWrapper.clientHeight, diff: contentHeight.diff});
  //   const shrinkTo = contentWrapper.clientHeight + contentHeight.diff
  //   // console.log('shrinking to', shrinkTo)
  //   dialogWindow.style.height = `${shrinkTo}px`;
  // }

  // console.log('contentHeight', contentHeight)
  // console.log('clientHeight', dialogWindow.clientHeight)
  // console.log('scrollHeight', dialogWindow.scrollHeight)
  // console.log('height', dialogWindow.style.height)
  // const wrapper = document.querySelector('.contentMeasuringWrapper');
  // const wrapper2 = document.querySelector('.sizeMeasuringWrapper');
  // console.log('content clientHeight', wrapper.clientHeight)
  // console.log('content scrollHeight', wrapper.scrollHeight)
  // console.log('content height', wrapper.style.height)
  // console.log('size clientHeight', wrapper2.clientHeight)
  // console.log('size scrollHeight', wrapper2.scrollHeight)
  // console.log('size height', wrapper2.style.height)

  // if (contentHeight <= dialogWindow.scrollHeight) {
  //   setContentHeight(dialogWindow.scrollHeight);
  //   console.log('growing', dialogWindow.scrollHeight)
  //   dialogWindow.style.height = `${dialogWindow.scrollHeight}px`;
  // } else if (wrapper.clientHeight < dialogWindow.clientHeight) {
  //   dialogWindow.style.height = `${wrapper.clientHeight}px`;
  //   console.log('shrinking', wrapper.clientHeight)
  // }
  // }, [content, contentHeight]);

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
      <div className="sizeMeasuringWrapper">
        <div
          className={classnames(olt.DialogWindow, windowClassName)}
          {...props}
          {...otherWindowProps}
          ref={dialogWindow}
        >
          <V2Button
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
