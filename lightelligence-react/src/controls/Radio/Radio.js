import React, { PureComponent } from 'react';
import { func, bool, string, node } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';

// TODO: Styleguide implementation
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
      <span className={`${OLT_NAMESPACE}Label`}>{children}</span>
    );

    const classes = classnames(`${OLT_NAMESPACE}Radio`, className);
    return (
      <label className={classes}>
        {label}
        <input
          type="radio"
          name="radio"
          value={value}
          onChange={this.onChange}
          checked={selected}
          disabled={disabled}
        />
        <span className={`${OLT_NAMESPACE}Radio-checkmark`} />
      </label>
    );
  }
}
