import React, { PureComponent } from 'react';
import { func, string, node } from 'prop-types';
import { ToggleGroup } from '../ToggleGroup';

export class RadioGroup extends PureComponent {
  static propTypes = {
    children: node,
    onChange: func.isRequired,
    value: string.isRequired,
    name: string.isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children, name, value, onChange, ...props } = this.props;

    return (
      <ToggleGroup name={name} value={value} onChange={onChange} {...props}>
        {children}
      </ToggleGroup>
    );
  }
}
