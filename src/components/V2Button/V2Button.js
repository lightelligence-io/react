import React from 'react';
import { pascalize } from 'humps';
import { string, bool, node, func, oneOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const V2Button = ({
  className,
  emphasis,
  type,
  theme,
  children,
  disabled,
  tag,
  iconLeft,
  iconRight,
  onClick,
  ...props
}) => {
  const Element = tag || 'button';

  return (
    <Element
      onClick={onClick}
      {...((Element === 'button' || Element === 'input') && disabled
        ? { disabled }
        : {})}
      {...props}
      className={classnames(
        olt.V2Button,
        emphasis && olt[`V2Button${pascalize(emphasis)}`],
        type && olt[`V2Button${pascalize(type)}`],
        theme && olt[`V2Button${pascalize(theme)}`],
        className,
      )}
      data-icon-left={iconLeft || undefined}
      data-icon-right={iconRight || undefined}
    >
      {children}
    </Element>
  );
};

V2Button.propTypes = {
  tag: string,
  className: string,
  iconLeft: string,
  iconRight: string,
  disabled: bool,
  children: node,
  onClick: func,
  emphasis: oneOf(['primary', 'secondary', 'tertiary']),
  type: oneOf(['default', 'confirmative', 'destructive', 'action']),
  theme: oneOf(['light', 'dark']),
};

V2Button.defaultProps = {
  tag: 'button',
  className: null,
  disabled: false,
  iconLeft: undefined,
  iconRight: undefined,
  children: null,
  onClick: undefined,
  emphasis: undefined, // primary by default
  type: undefined, // default by default
  theme: undefined, // light by default
};

export { V2Button };
