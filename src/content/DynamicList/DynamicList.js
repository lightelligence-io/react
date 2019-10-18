import React, { useState, useEffect } from 'react';
import * as olt from '@lightelligence/styles';
import { shape, func, string } from 'prop-types';
import classnames from 'classnames';

import V2Input from '../../controls/V2Input';

export const DynamicList = ({
  inputElement,
  inputProps,
  className,
  ...other
}) => {
  const element = inputElement || V2Input;

  const [elements, setElements] = useState([]);
  useEffect(() => setElements([element, element]), [element]);

  const onChange = (id) => (e) => {
    inputProps.onChange(id, e);
  };

  const { className: inputClassName, ...otherInputProps } = inputProps;

  return (
    <div className={classnames(olt.DynamicList, className)} {...other}>
      <div className={olt.DynamicListItems}>
        {elements.map((Element, index) => (
          <Element
            className={inputClassName} // TODO: remove if we don't need other classnames
            {...otherInputProps}
            onChange={onChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

DynamicList.propTypes = {
  inputElement: func.isRequired,
  inputProps: shape({ className: string }),
  className: string,
};

DynamicList.defaultProps = {
  inputProps: {},
  className: undefined,
};
