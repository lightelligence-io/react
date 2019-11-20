import React, { useCallback, useRef, useEffect } from 'react';
import { func, node, bool, string, shape } from 'prop-types';
import classnames from 'classnames';

import * as olt from '@lightelligence/styles';

export const Checkbox = ({
  children,
  className,
  checked,
  indeterminate,
  disabled,
  onChange,
  inline,
  inputProps,
  ...other
}) => {
  const inputRef = useRef();
  const change = useCallback(() => {
    if (onChange) {
      onChange(!checked);
    }
  }, [onChange, checked]);

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
  }, [indeterminate, checked]);
  const { className: inputClassName, ...finalInputProps } = inputProps;

  return (
    <label
      className={classnames(
        olt.Checkbox,
        inline && olt.CheckboxInline,
        className,
      )}
      {...other}
    >
      <input
        type="checkbox"
        className={classnames(
          indeterminate && olt.CheckboxIndeterminate,
          inputClassName,
        )}
        checked={checked}
        onChange={change}
        disabled={disabled}
        ref={inputRef}
        {...finalInputProps}
      />
      <div className={olt.CheckboxButton} />
      {children && (
        <div className={classnames(olt.CheckboxLabel)}>{children}</div>
      )}
    </label>
  );
};

Checkbox.propTypes = {
  /**
   * The label of this Checkbox.
   */
  children: node,
  /**
   * Forwards an additional className to the underlying component.
   */
  className: string,
  /**
   * Renders the Checkbox as `inline-flex` instead of `flex`.
   */
  inline: bool,
  /**
   * Eventhandler which is called when this Checkbox is clicked.
   */
  onChange: func,
  /**
   * The `checked` state of this input.
   */
  checked: bool,
  /**
   * The `indeterminate` state of this input.
   */
  indeterminate: bool,
  /**
   * The `disabled` state of this input.
   */
  disabled: bool,
  /**
   * `props` that will be forwarded to the underlying input component.
   */
  inputProps: shape({}),
};

Checkbox.defaultProps = {
  children: null,
  inline: false,
  className: null,
  onChange: null,
  checked: false,
  indeterminate: false,
  disabled: false,
  inputProps: {},
};
