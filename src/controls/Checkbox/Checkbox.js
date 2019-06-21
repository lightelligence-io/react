import React, { PureComponent } from 'react';
import { func, node, bool, string } from 'prop-types';
import { UID } from 'react-uid';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export class Checkbox extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    onChange: func,
    checked: bool,
    indeterminate: bool,
    disabled: bool,
  };

  static defaultProps = {
    children: null,
    className: null,
    onChange: null,
    checked: false,
    indeterminate: false,
    disabled: false,
  };

  onChange = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  };

  render() {
    const {
      children,
      className,
      checked,
      indeterminate,
      disabled,
    } = this.props;
    return (
      <UID name={(id) => `checkbox${id}`}>
        {(id) => (
          <div className={classnames(olt.Checkbox, className)}>
            <input
              id={id}
              type="checkbox"
              className={classnames(olt.CheckboxInput)}
              checked={checked}
              onChange={this.onChange}
              disabled={disabled}
            />
            {children && (
              <label
                htmlFor={id}
                className={classnames(
                  olt.Label,
                  olt.CheckboxLabel,
                  indeterminate && olt.CheckboxIndeterminate,
                )}
                style={{
                  fontSize: olt.theme.fontSize.small,
                  marginBottom: olt.theme.spacing[1],
                }}
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
