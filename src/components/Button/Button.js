import React from 'react';
import { pascalize } from 'humps';
import { string, bool, node, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const Button = ({
  className,
  color,
  outline,
  children,
  selectable,
  disabled,
  tag,
  icon,
  onClick,
  ...props
}) => {
  const Element = tag || 'button';

  return (
    <Element
      onClick={onClick}
      {...(Element === 'button' && disabled ? { disabled } : {})}
      {...props}
      className={classnames(
        olt.Button,
        color && olt[`Button${pascalize(color)}`],
        outline && olt.ButtonOutline,
        icon && olt.ButtonIcon,
        selectable && olt.ButtonSelectable,
        className,
      )}
      data-icon={icon || undefined}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  tag: string,
  className: string,
  selectable: bool,
  outline: bool,
  icon: string,
  disabled: bool,
  children: node,
  color: string,
  onClick: func,
};

Button.defaultProps = {
  tag: 'button',
  className: null,
  selectable: false,
  disabled: false,
  icon: '',
  outline: false,
  children: null,
  color: undefined,
  onClick: undefined,
};

export { Button };
