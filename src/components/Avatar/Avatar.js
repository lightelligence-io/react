import React, { PureComponent } from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

import {
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
    const shortName = name.substr(0, 1);

    return (
      <i
        {...props}
        className={classnames(
          olt.Avatar,
          size === AVATAR_SIZE_LARGE && olt.AvatarLarge,
          type === 'tenant' ? olt.AvatarTenant : olt.AvatarUser,
          className,
        )}
      >
        {shortName}
      </i>
    );
  }
}
