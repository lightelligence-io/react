import React from 'react';
import { pascalize } from 'humps';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

const Button = ({
  className,
  color,
  outline,
  children,
  selectable,
  disabled,
  tag,
  icon,
  ...props
}) => {
  const Element = tag || 'button';

  return (
    <Element
      {...props}
      className={classnames(
        olt.Button,
        color && olt[`Button${pascalize(color)}`],
        outline && olt.ButtonOutline,
        icon && olt.ButtonIcon,
        selectable && olt.ButtonSelectable,
        disabled && olt.isDisabled,
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
};

export { Button };
