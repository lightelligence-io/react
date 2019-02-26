import React, { PureComponent } from 'react';
import { func, bool, string, node } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

// TODO: Styleguide implementation!
// NOTE: Since we haven't got anything in place, non-existing css classes have been removed for now
export class RadioButton extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    children: node,
    onChange: func,
    selected: bool,
    disabled: bool,
    className: string,
  };

  static defaultProps = {
    children: null,
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
    const { children, selected, value, className, disabled } = this.props;

    const label = children && (
      <span className={classnames(olt.Label)}>{children}</span>
    );

    return (
      <label className={className}>
        {label}
        <input
          type="radio"
          name="radio"
          value={value}
          onChange={this.onChange}
          checked={selected}
          disabled={disabled}
        />
        {/* Radio checkmark doesn't exist */}
        <span />
      </label>
    );
  }
}
