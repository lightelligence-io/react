import React, { PureComponent } from 'react';
import { node, string, bool, func } from 'prop-types';
import classnames from 'classnames';

export class Tab extends PureComponent {
  static propTypes = {
    value: string.isRequired,
    label: string,
    active: bool,
    children: node,
    onSelect: func,
  };

  static defaultProps = {
    label: '',
    active: false,
    children: null,
    onSelect: null,
  };

  handleChange = () => {
    const { onSelect, value } = this.props;

    if (onSelect) onSelect(value);
  };

  render() {
    const { active, label, children } = this.props;

    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.handleChange}
          className={classnames('olt-Tabs-header', active && 'is-active')}
        >
          {label}
        </button>
        {children && (
          <div
            className={classnames('olt-Tabs-content', active && 'is-active')}
          >
            {children}
          </div>
        )}
      </React.Fragment>
    );
  }
}
