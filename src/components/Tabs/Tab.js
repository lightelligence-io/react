import React from 'react';
import { string, bool, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const Tab = ({
  active,
  label,
  onSelect,
  value,
  className,
  ...props
}) => {
  const handleChange = () => {
    if (onSelect && typeof onSelect === 'function') onSelect(value);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleChange}
        className={classnames(olt.TabsLink, active && olt.isActive, className)}
        {...props}
      >
        {label}
      </button>
    </>
  );
};

Tab.propTypes = {
  /**
   * The value passed back in the callback
   */
  value: string.isRequired,
  /**
   * The label shown on the tab
   */
  label: string,
  /**
   * Is the tab currently active
   */
  active: bool,
  /**
   * The callback when selecting a tab
   */
  onSelect: func,
  /**
   * additinal classes for the container component
   */
  className: string,
};

Tab.defaultProps = {
  label: '',
  active: false,
  onSelect: null,
  className: null,
};
