import React from 'react';
import { string, node, oneOf } from 'prop-types';
import classnames from 'classnames';
import { pascalize, camelize } from 'humps';
import * as olt from '@lightelligence/styles';

const Icon = ({ name, size, color, children, className, ...props }) => (
  <i
    {...props}
    className={classnames(
      olt.Icon,
      color &&
        (olt[`Icon${pascalize(color)}`] || olt[`uColor${pascalize(color)}`]),
      className,
      name && olt[`Icon${pascalize(name)}`],
    )}
    style={{
      fontSize: size ? olt.theme.fontSize[camelize(size)] : undefined,
    }}
  />
);

Icon.propTypes = {
  name: string.isRequired,
  color: oneOf([
    'default',
    'light',
    'dark',
    'primary',
    'secondary',
    'error',
    'success',
    'info',
  ]),
  size: string,
  className: string,
  children: node,
};

Icon.defaultProps = {
  className: null,
  color: undefined,
  size: '',
  children: null,
};

export { Icon };
