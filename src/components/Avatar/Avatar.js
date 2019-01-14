import React, { PureComponent } from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';

import {
  OLT_NAMESPACE,
  AVATAR_TYPE_USER,
  AVATAR_TYPE_TENANT,
  AVATAR_SIZE_LARGE,
  AVATAR_SIZE_MEDIUM,
} from '../../constants';

export class Avatar extends PureComponent {
  static propTypes = {
    name: string.isRequired,
    className: string,
    size: oneOf([AVATAR_SIZE_MEDIUM, AVATAR_SIZE_LARGE]),
    type: oneOf([AVATAR_TYPE_USER, AVATAR_TYPE_TENANT]).isRequired,
  };

  static defaultProps = {
    className: null,
    size: AVATAR_SIZE_MEDIUM,
  };

  render() {
    const { type, size, name, className, ...props } = this.props;
    const base = `${OLT_NAMESPACE}Avatar`;
    const shortName = name.substr(0, 1);

    return (
      <i
        {...props}
        className={classnames(
          base,
          size === AVATAR_SIZE_LARGE && `${base}--large`,
          type === 'tenant' ? `${base}--tenant` : `${base}--user`,
          className,
        )}
      >
        {shortName}
      </i>
    );
  }
}
