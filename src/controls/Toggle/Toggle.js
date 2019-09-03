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
  children: node,
  className: string,
  inline: bool,
  onChange: func,
  reversed: bool,
  checked: bool,
  disabled: bool,
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
