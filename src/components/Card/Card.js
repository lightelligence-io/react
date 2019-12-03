import React from 'react';
import { bool, string, node, oneOfType, shape, func } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

import { ActionButton } from '../ActionButton';
import { Image } from '../../content/Image';
import { Link } from '../../content/Link';

export const Card = ({
  children,
  image,
  title,
  description,
  action,
  color,
  selectable,
  className,
  disabled,
  edit,
  onEdit,
  to,
  contentProps,
  actionProps,
  headerProps,
  editProps,
  ...props
}) => {
  const Element = selectable && !to ? 'button' : (to && Link) || 'div';

  const { className: contentClassName, ...contentOther } = contentProps;
  const { className: actionClassName, ...actionOther } = actionProps;
  const { className: headerClassName, ...headerOther } = headerProps;
  const { className: editClassName, ...editOther } = editProps;

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
        edit && olt.CardEdit,
        edit && olt.ActionButtonProximityArea,
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
      {(title || description || action || edit) && (
        <div
          className={classnames(olt.CardHeader, headerClassName)}
          {...headerOther}
        >
          {title && <div className={olt.CardTitle}>{title}</div>}
          {description && (
            <div className={olt.CardDescription}>{description}</div>
          )}
          {(action || edit) && (
            <div
              className={classnames(olt.CardAction, actionClassName)}
              {...actionOther}
            >
              {action}
              {edit && (
                <ActionButton
                  iconRight="edit"
                  label="Edit"
                  className={editClassName}
                  onClick={() => typeof onEdit === 'function' && onEdit()}
                  {...editOther}
                />
              )}
            </div>
          )}
        </div>
      )}
      {children && (
        <div
          className={classnames(olt.CardContent, contentClassName)}
          {...contentOther}
        >
          {children}
        </div>
      )}
    </Element>
  );
};

Card.propTypes = {
  children: node,
  className: string,
  title: node,
  description: node,
  image: oneOfType([node, string]),
  action: node,
  color: string,
  selectable: bool,
  disabled: bool,
  edit: bool,
  onEdit: func,
  contentProps: shape({}),
  actionProps: shape({}),
  headerProps: shape({}),
  editProps: shape({}),
  to: string,
};

Card.defaultProps = {
  children: null,
  className: null,
  title: null,
  description: null,
  image: null,
  action: null,
  color: undefined,
  selectable: false,
  disabled: false,
  edit: false,
  onEdit: null,
  contentProps: {},
  actionProps: {},
  headerProps: {},
  editProps: {},
  to: '',
};
