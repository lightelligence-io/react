import React, { PureComponent } from 'react';
import { bool, node, func, oneOf, string } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
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
    const base = `${OLT_NAMESPACE}Modal`;

    document.documentElement.style.overflow = open ? 'hidden' : '';

    return (
      <section
        className={classnames(
          base,
          fullscreen && `${base}--fullscreen`,
          type !== 'none' && `${base}--${type}`,
          open && 'is-open',
          className,
        )}
        {...(closable
          ? { onClick: (e) => e.target === e.currentTarget && onClose() }
          : undefined)}
      >
        <div className={`${base}-dialog`} {...props}>
          {closable && !fullscreen && (
            <Button
              icon="close"
              className={`${base}-close`}
              onClick={onClose}
            />
          )}
          {title && <div className={`${base}-header`}>{title}</div>}
          {children && <div className={`${base}-content`}>{children}</div>}
          {footer && <div className={`${base}-footer`}>{footer}</div>}
        </div>
        {fullscreen && closable && (
          <Button icon="close" className={`${base}-close`} onClick={onClose} />
        )}
      </section>
    );
  }
}

export { Modal };
