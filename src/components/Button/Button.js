import React from 'react';
import { pascalize } from 'humps';
import { string, bool, node, func, oneOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const Button = React.forwardRef(
  (
    {
      className,
      emphasis,
      // avoid name clash with type which can be passed to input elements
      buttonType,
      theme,
      children,
      disabled,
      tag,
      iconLeft,
      iconRight,
      loading,
      onClick,
      ...props
    },
    ref,
  ) => {
    const Element = tag || 'button';
    return (
      <Element
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        {...props}
        className={classnames(
          olt.Button,
          emphasis && olt[`Button${pascalize(emphasis)}`],
          buttonType && olt[`Button${pascalize(buttonType)}`],
          theme && olt[`Button${pascalize(theme)}`],
          iconLeft && olt[`Icon${pascalize(iconLeft)}`],
          iconLeft && olt.ButtonIconLeft,
          iconRight && olt[`Icon${pascalize(iconRight)}`],
          iconRight && olt.ButtonIconRight,
          loading && olt.ButtonProgress,
          className,
        )}
      >
        {children}
      </Element>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  /**
   * The html tag that should be rendered for this button.
   * Should be `button`, `input` or `a`.
   */
  tag: oneOf(['button', 'input', 'a']),
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * Should the button be rendered as icon only.
   */
  icon: string,
  /**
   * An icon that should be rendered to the left of the button label.
   */
  iconLeft: string,
  /**
   * An icon that should be rendered to the right of the button label.
   */
  iconRight: string,
  /**
   * The `disabled` state of this button.
   */
  disabled: bool,
  /**
   * The `laoding` state of this button.
   */
  loading: bool,
  /**
   * The label of this button.
   */
  children: node,
  /**
   * This function is called when a the button is clicked.
   */
  onClick: func,
  /**
   * The emphasis of this button, by default its rendered with `primary`-emphasis.
   */
  emphasis: oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * The type of this button, by default its rendered as `default`.
   */
  buttonType: oneOf([
    'default',
    'confirmative',
    'destructive',
    'action',
    'paginationPrev',
    'paginationNext',
  ]),
  /**
   * The theme of this button, by default its rendered with theme `light`.
   */
  theme: oneOf(['light', 'dark']),
};

Button.defaultProps = {
  tag: 'button',
  className: undefined,
  disabled: undefined,
  loading: false,
  icon: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  children: null,
  onClick: undefined,
  emphasis: undefined,
  buttonType: undefined,
  theme: 'light',
};
