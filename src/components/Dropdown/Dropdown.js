import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
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
    color: '',
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
    const base = `${OLT_NAMESPACE}Dropdown`;

    return (
      <div
        ref={this.dropdownRef}
        {...props}
        className={classnames(
          base,
          color && `${base}--${color}`,
          outline && `${base}--outline`,
          className,
          open && `is-open`,
          disabled && `is-disabled`,
        )}
      >
        <button
          type="button"
          className={`${OLT_NAMESPACE}Dropdown-label`}
          onClick={this.handleClick}
        >
          {label}
        </button>
        <div className={`${OLT_NAMESPACE}Dropdown-content`}>{children}</div>
      </div>
    );
  }
}
