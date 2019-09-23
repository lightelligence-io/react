import React from 'react';
import { string, bool, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

export const V2Tab = (props) => {
  const handleChange = () => {
    const { onSelect, value } = props;
    if (onSelect) onSelect(value);
  };

  const { active, label } = props;

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={handleChange}
        className={classnames(olt.V2TabsLink, active && olt.isActive)}
      >
        {label}
      </button>
    </React.Fragment>
  );
};

V2Tab.propTypes = {
  value: string.isRequired,
  label: string,
  active: bool,
  onSelect: func,
};

V2Tab.defaultProps = {
  label: '',
  active: false,
  onSelect: null,
};
