import React from 'react';
import { string, bool, node } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

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
  const base = `${OLT_NAMESPACE}Button`;
  const Element = tag || 'button';

  return (
    <Element
      {...props}
      className={classnames(
        base,
        color && `${base}--${color}`,
        outline && `${base}--outline`,
        icon && `${base}--icon`,
        selectable && `${base}--selectable`,
        disabled ? 'is-disabled' : '',
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
  color: '',
};

export { Button };
