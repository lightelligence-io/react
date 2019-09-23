import React, { PureComponent } from 'react';
import { string, bool, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export class V2Tab extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    label: string,
    active: bool,
    onSelect: func,
  };

  static defaultProps = {
    label: '',
    active: false,
    onSelect: null,
  };

  handleChange = () => {
    const { onSelect, value } = this.props;
    if (onSelect) onSelect(value);
  };

  render() {
    const { active, label } = this.props;

    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.handleChange}
          className={classnames(olt.V2TabsLink, active && olt.isActive)}
        >
          {label}
        </button>
      </React.Fragment>
    );
  }
}
