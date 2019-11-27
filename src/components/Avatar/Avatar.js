import React from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

import {
  AVATAR_TYPE_USER,
  AVATAR_TYPE_TENANT,
  AVATAR_SIZE_LARGE,
  AVATAR_SIZE_MEDIUM,
} from '../../constants';

export const Avatar = ({
  type,
  size = AVATAR_SIZE_MEDIUM,
  name,
  className = null,
  ...props
}) => {
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
};

Avatar.propTypes = {
  name: string.isRequired,
  className: string,
  size: oneOf([AVATAR_SIZE_MEDIUM, AVATAR_SIZE_LARGE]),
  type: oneOf([AVATAR_TYPE_USER, AVATAR_TYPE_TENANT]).isRequired,
};

Avatar.defaultProps = {
  className: null,
  size: AVATAR_SIZE_MEDIUM,
};
