import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';
import classnames from 'classnames';

import { OLT_NAMESPACE } from '../../constants';

export class ListItem extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    term: string,
  };

  static defaultProps = {
    children: null,
    className: null,
    term: null,
  };

  render() {
    const { children, className, term, ...props } = this.props;
    const base = `${OLT_NAMESPACE}List`;

    return (
      <React.Fragment>
        {term && (
          <li {...props} className={classnames(`${base}-term`, className)}>
            {term}
          </li>
        )}
        <li {...props} className={classnames(`${base}-item`, className)}>
          {children}
        </li>
      </React.Fragment>
    );
  }
}
