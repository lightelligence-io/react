import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../src';

export const TabButtonRenderer = ({
  name,
  className,
  onClick,
  active,
  children,
}) => {
  return (
    <button
      className={classnames(
        className,
        'tab-button',
        active && 'tab-button-active',
      )}
      type="button"
      name={name}
      onClick={onClick}
    >
      <Icon
        name={active ? 'chevron-down' : 'chevron-right'}
        size="xx-small"
        className="tab-button--icon"
      />
      {children}
    </button>
  );
};

TabButtonRenderer.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
};

TabButtonRenderer.defaultProps = {
  name: null,
  className: null,
  onClick: null,
  active: null,
  children: null,
};

export default TabButtonRenderer; // eslint-disable-line
