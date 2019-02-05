import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
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
  render() {
    const _this$props = this.props,
      {
        children,
        title,
        type,
        open,
        closable,
        fullscreen,
        footer,
        onClose,
        className,
      } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'children',
        'title',
        'type',
        'open',
        'closable',
        'fullscreen',
        'footer',
        'onClose',
        'className',
      ]);

    const base = `${OLT_NAMESPACE}Modal`;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return React.createElement(
      'section',
      _extends(
        {
          className: classnames(
            base,
            fullscreen && `${base}--fullscreen`,
            type !== 'none' && `${base}--${type}`,
            open && 'is-open',
            className,
          ),
        },
        closable
          ? {
              onClick: (e) => e.target === e.currentTarget && onClose(),
            }
          : undefined,
      ),
      React.createElement(
        'div',
        _extends(
          {
            className: `${base}-dialog`,
          },
          props,
        ),
        closable &&
          !fullscreen &&
          React.createElement(Button, {
            icon: 'close',
            className: `${base}-close`,
            onClick: onClose,
          }),
        title &&
          React.createElement(
            'div',
            {
              className: `${base}-header`,
            },
            title,
          ),
        children &&
          React.createElement(
            'div',
            {
              className: `${base}-content`,
            },
            children,
          ),
        footer &&
          React.createElement(
            'div',
            {
              className: `${base}-footer`,
            },
            footer,
          ),
      ),
      fullscreen &&
        closable &&
        React.createElement(Button, {
          icon: 'close',
          className: `${base}-close`,
          onClick: onClose,
        }),
    );
  }
}

_defineProperty(Modal, 'propTypes', {
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
});

_defineProperty(Modal, 'defaultProps', {
  title: null,
  children: null,
  type: MODAL_TYPE_NONE,
  fullscreen: false,
  footer: null,
  onClose: null,
  closable: false,
  className: null,
});

export { Modal };
