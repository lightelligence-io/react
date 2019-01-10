import React from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';

import { OLT_NAMESPACE } from '../../constants';

const Icon = ({ name, size, color, children, className, ...props }) => {
  const base = `${OLT_NAMESPACE}Icon`;

  return (
    <i
      {...props}
      data-icon={name}
      className={classnames(
        base,
        color && `${base}--${color}`,
        size && `${OLT_NAMESPACE}u-fontSize${pascalize(size)}`,
        className,
      )}
    />
  );
};

Icon.propTypes = {
  name: string.isRequired,
  color: string,
  size: string,
  className: string,
  children: node,
};

Icon.defaultProps = {
  className: null,
  color: '',
  size: '',
  children: null,
};

export { Icon };
