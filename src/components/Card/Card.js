import React, { PureComponent } from 'react';
import { bool, string, node, oneOfType } from 'prop-types';
import classnames from 'classnames';

import { colorProp } from '../../propTypes';
import { OLT_NAMESPACE } from '../../constants';

import { Image } from '../../content/Image';
import { Link } from '../../content/Link';

export class Card extends PureComponent {
  static propTypes = {
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
  };

  static defaultProps = {
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
  };

  render() {
    const {
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
      ...props
    } = this.props;

    const base = `${OLT_NAMESPACE}Card`;

    const classes = classnames(
      base,
      color && `${base}--${color}`,
      selectable && `${base}--selectable`,
      className,
      disabled && 'is-disabled',
    );

    const Element = selectable && !to ? 'button' : (to && Link) || 'div';

    return (
      <Element
        to={to || undefined}
        normal={to ? true : undefined}
        className={classes}
        {...props}
      >
        {image &&
          (typeof image === 'string' ? (
            <Image
              className={`Image ${OLT_NAMESPACE}Card-image`}
              src={image}
              fluid
            />
          ) : (
            image
          ))}
        {(title || description || action) && (
          <div className={`${OLT_NAMESPACE}Card-header`}>
            {title && (
              <div className={`${OLT_NAMESPACE}Card-title`}>{title}</div>
            )}
            {description && (
              <div className={`${OLT_NAMESPACE}Card-description`}>
                {description}
              </div>
            )}
            {action && (
              <div className={`${OLT_NAMESPACE}Card-action`}>{action}</div>
            )}
          </div>
        )}
        {children && (
          <div className={`${OLT_NAMESPACE}Card-content`}>{children}</div>
        )}
      </Element>
    );
  }
}
