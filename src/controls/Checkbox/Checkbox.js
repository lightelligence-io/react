import React, { PureComponent } from 'react';
import { func, node, bool } from 'prop-types';
import { UID } from 'react-uid';
import { OLT_NAMESPACE } from '../../constants';

export class Checkbox extends PureComponent {
  static propTypes = {
    children: node,
    onChange: func,
    checked: bool,
    disabled: bool,
  };

  static defaultProps = {
    children: null,
    checked: false,
    onChange: null,
    disabled: false,
  };

  onChange = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  };

  render() {
    const { children, checked, disabled } = this.props;
    return (
      <UID name={(id) => `checkbox${id}`}>
        {(id) => (
          <div className={`${OLT_NAMESPACE}Checkbox`}>
            <input
              id={id}
              type="checkbox"
              className={`${OLT_NAMESPACE}Checkbox-input`}
              checked={checked}
              onChange={this.onChange}
              disabled={disabled}
            />
            {children && (
              <label
                htmlFor={id}
                className={`label ${OLT_NAMESPACE}Checkbox-label ${OLT_NAMESPACE}u-fontSizeSmall ${OLT_NAMESPACE}u-marginBottom1`}
              >
                {children}
              </label>
            )}
          </div>
        )}
      </UID>
    );
  }
}
