import React from 'react';
import { oneOf, string } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

export const Avatar = ({ type, size, name, color, className, ...props }) => {
  const shortName = name.substr(0, 1);

  return (
    <i
      {...props}
      className={classnames(
        olt.Avatar,
        size === 'm' && olt.AvatarMedium,
        size === 'l' && olt.AvatarLarge,
        type === 'tenant' ? olt.AvatarTenant : olt.AvatarUser,
        color &&
          (olt[`uColor${pascalize(color)}`] || olt[`Icon${pascalize(color)}`]),
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
  color: string,
  size: oneOf(['s', 'm', 'l']),
  type: oneOf(['user', 'tenant']),
};

Avatar.defaultProps = {
  className: null,
  size: 'm',
  color: null,
  type: 'user',
};
