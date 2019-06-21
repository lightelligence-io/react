import React, { PureComponent } from 'react';
import { func, bool, string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export class Radio extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    children: node,
    name: string,
    onChange: func,
    selected: bool,
    disabled: bool,
    className: string,
  };

  static defaultProps = {
    children: null,
    name: null,
    selected: null,
    onChange: null,
    disabled: null,
    className: null,
  };

  onChange = () => {
    const { onChange, value } = this.props;
    if (onChange) onChange(value);
  };

  render() {
    const { children, name, selected, value, className, disabled } = this.props;

    return (
      <label className={classnames(olt.Radio, className)}>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={this.onChange}
          checked={selected}
          disabled={disabled}
        />
        <span className={olt.RadioButton} />
        <span className={olt.RadioLabel}>{children}</span>
      </label>
    );
  }
}
