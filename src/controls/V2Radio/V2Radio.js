import React, { useCallback } from 'react';
import { func, node, bool, string, shape } from 'prop-types';
import classnames from 'classnames';

import * as olt from '@lightelligence/styles';

export const V2Radio = ({
  children,
  className,
  checked,
  disabled,
  onChange,
  inputProps,
  name,
  value,
  ...other
}) => {
  const change = useCallback(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(!checked);
    }
  }, [onChange, checked]);

  const { className: inputClassName, ...finalInputProps } = inputProps;

  return (
    <label className={classnames(olt.V2Radio, className)} {...other}>
      <input
        type="radio"
        className={classnames(olt.V2RadioInput, inputClassName)}
        checked={checked}
        onChange={change}
        disabled={disabled}
        name={name}
        value={value}
        {...finalInputProps}
      />
      <div className={olt.V2RadioButton} />
      {children && (
        <div className={classnames(olt.V2RadioLabel)}>{children}</div>
      )}
    </label>
  );
};

V2Radio.propTypes = {
  /**
   * The label of this V2Radio.
   */
  children: node,
  /**
   * Forwards an additional className to the underlying component.
   */
  className: string,
  /**
   * Eventhandler which is called when this V2Radio is clicked.
   */
  onChange: func,
  /**
   * The `checked` state of this input.
   */
  checked: bool,
  /**
   * The `disabled` state of this input.
   */
  disabled: bool,
  /**
   * Use the name attribute to create a radio group (list of elements with the same name).
   */
  name: string,
  /**
   * Use the value attribute to define the value of the radio element.
   */
  value: string,
  /**
   * `props` that will be forwarded to the underlying input component.
   */
  inputProps: shape({}),
};

V2Radio.defaultProps = {
  children: null,
  className: null,
  onChange: null,
  checked: null,
  disabled: false,
  name: null,
  value: '',
  inputProps: {},
};
