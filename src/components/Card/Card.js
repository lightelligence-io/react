import React, { PureComponent } from 'react';
import { bool, string, node, oneOfType } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

import { colorProp } from '../../propTypes';

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
    color: undefined,
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

    const Element = selectable && !to ? 'button' : (to && Link) || 'div';

    return (
      <Element
        to={to || undefined}
        normal={to ? true : undefined}
        className={classnames(
          olt.Card,
          color && olt[`Card${pascalize(color)}`],
          selectable && olt.ButtonSelectable,
          className,
          disabled && olt.isDisabled,
        )}
        {...props}
      >
        {image &&
          (typeof image === 'string' ? (
            <Image
              className={classnames(olt.Image, olt.CardImage)}
              src={image}
              fluid
            />
          ) : (
            image
          ))}
        {(title || description || action) && (
          <div className={olt.CardHeader}>
            {title && <div className={olt.CardTitle}>{title}</div>}
            {description && (
              <div className={olt.CardDescription}>{description}</div>
            )}
            {action && <div className={olt.CardAction}>{action}</div>}
          </div>
        )}
        {children && <div className={olt.CardContent}>{children}</div>}
      </Element>
    );
  }
}
