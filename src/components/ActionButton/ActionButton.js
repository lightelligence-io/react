import React from 'react';
import { pascalize } from 'humps';
import { string, bool, func, oneOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

const ActionButton = ({
  className,
  // avoid name clash with type which can be passed to input elements
  buttonType,
  fixed,
  standalone,
  base,
  disabled,
  label,
  tag,
  iconLeft,
  iconRight,
  onClick,
  ...props
}) => {
  const Element = tag || 'button';
  return (
    <Element
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
      className={classnames(
        olt.ActionButton,
        buttonType && olt[`ActionButton${pascalize(buttonType)}`],
        fixed && olt.ActionButtonFixed,
        standalone && olt.ActionButtonStandalone,
        base && olt.ActionButtonBase,
        disabled && olt.ActionButtonDisabled,
        iconLeft && olt[`Icon${pascalize(iconLeft)}`],
        iconLeft && olt.ActionButtonIconLeft,
        iconRight && olt[`Icon${pascalize(iconRight)}`],
        iconRight && olt.ActionButtonIconRight,
        className,
      )}
    >
      {label && <div className={olt.ActionButtonLabel}>{label}</div>}
    </Element>
  );
};

ActionButton.propTypes = {
  /**
   * The html tag that should be rendered for this button.
   * Should be `button` or `a`.
   */
  tag: oneOf(['button', 'a']),
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * The type of this button, by default its rendered as `default`.
   */
  buttonType: oneOf(['default', 'primary', 'confirmative', 'destructive']),
  /**
   * The button label.
   */
  label: string,
  /**
   * An icon that should be rendered to the left of the button label.
   */
  iconLeft: string,
  /**
   * An icon that should be rendered to the right of the button label.
   */
  iconRight: string,
  /**
   * Enable rendering with fixed label.
   */
  fixed: bool,
  /**
   * Enable rendering as standalon (icon only).
   */
  standalone: bool,
  /**
   * Show the base (background).
   */
  base: bool,
  /**
   * Disable the button.
   */
  disabled: bool,
  /**
   * This function is called when a the button is clicked.
   */
  onClick: func,
};

ActionButton.defaultProps = {
  tag: 'button',
  label: null,
  fixed: false,
  standalone: false,
  base: false,
  disabled: false,
  className: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  onClick: undefined,
  buttonType: 'default',
};

export { ActionButton };
