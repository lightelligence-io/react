import React, { PureComponent } from 'react';
import { string, node, bool } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';
import { Link } from '../../content/Link';

export class MenuItem extends PureComponent {
  static propTypes = {
    className: string,
    children: node,
    active: bool,
    to: string,
  };

  static defaultProps = {
    className: null,
    children: null,
    active: false,
    to: null,
  };

  render() {
    const { className, children, to, active, ...props } = this.props;
    const Element = to ? Link : 'span';

    return (
      <div className={classnames(`${OLT_NAMESPACE}Menu-item`, className)}>
        <Element
          {...{
            ...props,
            ...(to ? { to } : {}),
          }}
          className={classnames(
            `${OLT_NAMESPACE}Menu-link`,
            active && 'is-active',
          )}
        >
          {children}
        </Element>
      </div>
    );
  }
}
