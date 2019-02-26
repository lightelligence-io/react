import React, { Component } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/lightelligence-ui';

import { isServerSideRendering } from '../../utils/isServerSideRendering';

export class Navbar extends Component {
  static propTypes = {
    children: node,
    className: string,
    title: node,
    home: string,
    color: string,
  };

  static defaultProps = {
    children: null,
    className: null,
    title: null,
    home: '/',
    color: 'dark',
  };

  state = {
    open: false,
  };

  navbarRef = React.createRef();

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
    const { current: navbar } = this.navbarRef;
    const isContained = navbar.contains
      ? navbar.contains(event.target)
      : event.target;
    const isLink = event.target.closest('*[class*="link"]');

    if (!isContained || isLink) {
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
    const { children, className, title, home, color, ...props } = this.props;
    const { open } = this.state;

    return (
      <nav
        ref={this.navbarRef}
        {...props}
        className={classnames(
          olt.Navbar,
          olt[`Navbar${pascalize(color)}`],
          open && olt.isOpen,
        )}
      >
        <button
          type="button"
          className={olt.NavbarToggle}
          onClick={this.handleClick}
        />
        <a className={olt.NavbarTitle} href={home}>
          {title}
        </a>
        <div className={olt.NavbarContent}>
          <a className={olt.NavbarTitle} href={home}>
            {title}
          </a>
          {children}
        </div>
      </nav>
    );
  }
}
