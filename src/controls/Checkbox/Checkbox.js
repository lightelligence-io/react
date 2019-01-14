import React, { PureComponent } from 'react';
import { func, node, bool } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants';

export class Checkbox extends PureComponent {
  static propTypes = {
    children: node,
    onChange: func,
    checked: bool,
  };

  static defaultProps = {
    children: null,
    checked: false,
    onChange: null,
  };

  onChange = () => {
    const { checked, onChange } = this.props;
    if (onChange) onChange(!checked);
  };

  render() {
    const { children, checked } = this.props;
    const label = children && (
      <label
        htmlFor="checkbox1"
        className={`label ${OLT_NAMESPACE}Checkbox-label ${OLT_NAMESPACE}u-fontSizeSmall ${OLT_NAMESPACE}u-marginBottom1`}
      >
        {children}
      </label>
    );

    return (
      <div className={`${OLT_NAMESPACE}Checkbox`}>
        <input
          id="checkbox1"
          type="checkbox"
          className={`${OLT_NAMESPACE}Checkbox-input`}
          checked={checked}
          onChange={this.onChange}
        />
        {label}
      </div>
    );
  }
}
