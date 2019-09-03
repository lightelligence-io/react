import React, { useCallback } from 'react';
import { func, node, bool, string, shape } from 'prop-types';
import classnames from 'classnames';

import * as olt from '@lightelligence/styles';

export const Toggle = ({
  children,
  className,
  checked,
  disabled,
  reversed,
  onChange,
  inline,
  inputProps,
  ...other
}) => {
  const change = useCallback(() => {
    if (onChange) {
      onChange(!checked);
    }
  }, [onChange, checked]);

  const { className: inputClassName, ...finalInputProps } = inputProps;

  return (
    <label
      className={classnames(
        olt.Toggle,
        inline && olt.ToggleInline,
        reversed && olt.ToggleReversed,
        className,
      )}
      {...other}
    >
      <input
        type="checkbox"
        className={classnames(olt.ToggleInput, inputClassName)}
        checked={checked}
        onChange={change}
        disabled={disabled}
        {...finalInputProps}
      />
      <div className={olt.ToggleButton} />
      {children && (
        <div className={classnames(olt.ToggleLabel)}>{children}</div>
      )}
    </label>
  );
};

Toggle.propTypes = {
  /**
   * The label of this Toggle.
   */
  children: node,
  /**
   * Forwards an additional className to the underlying component.
   */
  className: string,
  /**
   * Renders the Toggle as `inline-flex` instead of `flex`.
   */
  inline: bool,
  /**
   * Eventhandler which is called when this Toggle is clicked.
   */
  onChange: func,
  /**
   * When reversed is true the label is rendered on the left of the button.
   */
  reversed: bool,
  /**
   * The `checked` state of this input.
   */
  checked: bool,
  /**
   * The `disabled` state of this input.
   */
  disabled: bool,
  /**
   * `props` that will be forwarded to the underlying input component.
   */
  inputProps: shape({}),
};

Toggle.defaultProps = {
  children: null,
  inline: false,
  className: null,
  onChange: null,
  reversed: false,
  checked: false,
  disabled: false,
  inputProps: {},
};
