import React from 'react';
import { func, string, node } from 'prop-types';
import * as olt from '@lightelligence/styles';

import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

export const Copyable = (props) => {
  const { value, onCopy, className, children, ...rest } = props;
  const copyToClipboard = useCopyToClipboard(value || children);

  const copy = () => {
    copyToClipboard();
    if (onCopy && typeof onCopy === 'function') onCopy(value || children);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={copy}
      onKeyPress={copy}
      className={olt.Copyable}
      {...rest}
    >
      {children}
    </div>
  );
};

Copyable.propTypes = {
  value: string,
  onCopy: func,
  children: node.isRequired,
  className: string,
};

Copyable.defaultProps = {
  className: null,
  value: null,
  onCopy: () => {},
};
