import React, { PureComponent } from 'react';
import { bool, node, func, oneOf, string } from 'prop-types';
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

class Modal extends PureComponent {
  static propTypes = {
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
  };

  static defaultProps = {
    title: null,
    children: null,
    type: MODAL_TYPE_NONE,
    fullscreen: false,
    footer: null,
    onClose: null,
    closable: false,
    className: null,
  };

  render() {
    const {
      children,
      title,
      type,
      open,
      closable,
      fullscreen,
      footer,
      onClose,
      className,
      ...props
    } = this.props;

    if (!isServerSideRendering) {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }

    return (
      <section
        className={classnames(
          olt.Modal,
          fullscreen && olt.ModalFullscreen,
          type !== MODAL_TYPE_NONE && olt[`Modal${pascalize(type)}`],
          open && olt.isOpen,
          className,
        )}
        {...(closable
          ? { onClick: (e) => e.target === e.currentTarget && onClose() }
          : undefined)}
      >
        <div className={olt.ModalDialog} {...props}>
          {closable && !fullscreen && (
            <Button icon="close" className={olt.ModalClose} onClick={onClose} />
          )}
          {title && <div className={olt.ModalHeader}>{title}</div>}
          {children && <div className={olt.ModalContent}>{children}</div>}
          {footer && <div className={olt.ModalFooter}>{footer}</div>}
        </div>
        {fullscreen && closable && (
          <Button icon="close" className={olt.ModalClose} onClick={onClose} />
        )}
      </section>
    );
  }
}

export { Modal };
