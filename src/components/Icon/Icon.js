import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import { pascalize, camelize } from 'humps';
import * as olt from '@lightelligence/lightelligence-ui';

const Icon = ({ name, size, color, children, className, ...props }) => (
  <i
    {...props}
    data-icon={name}
    className={classnames(
      olt.Icon,
      color && olt[`Icon${pascalize(color)}`],
      className,
    )}
    style={{
      fontSize: size ? olt.theme.fontSize[camelize(size)] : undefined,
    }}
  />
);

Icon.propTypes = {
  name: string.isRequired,
  color: string,
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
