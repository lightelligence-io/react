import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

import { isServerSideRendering } from '../../utils/isServerSideRendering';

export class Dropdown extends Component {
  static propTypes = {
    children: node,
    className: string,
    label: node.isRequired,
    color: string,
    outline: bool,
    disabled: bool,
  };

  static defaultProps = {
    children: null,
    className: null,
    color: undefined,
    outline: false,
    disabled: false,
  };

  state = {
    open: false,
  };

  dropdownRef = React.createRef();

  componentDidMount() {
    if (!isServerSideRendering) {
      window.addEventListener('click', this.handleOffClick);
    }
  }

  componentWillUnmount() {
    if (!isServerSideRendering) {
      window.removeEventListener('click', this.handleOffClick);
    }
  }

  handleOffClick = (event) => {
    const { current: dropdown } = this.dropdownRef;
    const isContained =
      'contains' in dropdown ? dropdown.contains(event.target) : event.target;

    if (!isContained) {
      this.setState({
        open: false,
      });
    }
  };

  handleClick = (event) => {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  };

  render() {
    const {
      children,
      className,
      label,
      color,
      outline,
      disabled,
      ...props
    } = this.props;
    const { open } = this.state;

    return (
      <div
        ref={this.dropdownRef}
        {...props}
        className={classnames(
          olt.Dropdown,
          color && olt[`Dropdown${pascalize(color)}`],
          outline && olt.DropdownOutline,
          className,
          open && olt.isOpen,
          disabled && olt.isDisabled,
        )}
      >
        <button
          type="button"
          className={olt.DropdownLabel}
          onClick={this.handleClick}
        >
          {label}
        </button>
        <div className={olt.DropdownContent}>{children}</div>
      </div>
    );
  }
}
