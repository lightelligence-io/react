import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { bool, string, node, oneOfType } from 'prop-types';
import classnames from 'classnames';
import { colorProp } from '../../propTypes';
import { OLT_NAMESPACE } from '../../constants';
import { Image } from '../../content/Image';
import { Link } from '../../content/Link';
export class Card extends PureComponent {
  render() {
    const _this$props = this.props,
      {
        children,
        image,
        title,
        description,
        action,
        color,
        selectable,
        className,
        disabled,
        to,
      } = _this$props,
      props = _objectWithoutProperties(_this$props, [
        'children',
        'image',
        'title',
        'description',
        'action',
        'color',
        'selectable',
        'className',
        'disabled',
        'to',
      ]);

    const base = `${OLT_NAMESPACE}Card`;
    const classes = classnames(
      base,
      color && `${base}--${color}`,
      selectable && `${base}--selectable`,
      className,
      disabled && 'is-disabled',
    );
    const Element = selectable && !to ? 'button' : (to && Link) || 'div';
    return React.createElement(
      Element,
      _extends(
        {
          to: to || undefined,
          normal: to ? true : undefined,
          className: classes,
        },
        props,
      ),
      image &&
        (typeof image === 'string'
          ? React.createElement(Image, {
              className: `Image ${OLT_NAMESPACE}Card-image`,
              src: image,
              fluid: true,
            })
          : image),
      (title || description || action) &&
        React.createElement(
          'div',
          {
            className: `${OLT_NAMESPACE}Card-header`,
          },
          title &&
            React.createElement(
              'div',
              {
                className: `${OLT_NAMESPACE}Card-title`,
              },
              title,
            ),
          description &&
            React.createElement(
              'div',
              {
                className: `${OLT_NAMESPACE}Card-description`,
              },
              description,
            ),
          action &&
            React.createElement(
              'div',
              {
                className: `${OLT_NAMESPACE}Card-action`,
              },
              action,
            ),
        ),
      children &&
        React.createElement(
          'div',
          {
            className: `${OLT_NAMESPACE}Card-content`,
          },
          children,
        ),
    );
  }
}

_defineProperty(Card, 'propTypes', {
  children: node,
  className: string,
  title: node,
  description: node,
  image: oneOfType([node, string]),
  action: node,
  color: colorProp,
  selectable: bool,
  disabled: bool,
  to: string,
});

_defineProperty(Card, 'defaultProps', {
  children: null,
  className: null,
  title: null,
  description: null,
  image: null,
  action: null,
  color: null,
  selectable: false,
  disabled: false,
  to: '',
});
