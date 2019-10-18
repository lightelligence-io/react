import React, { useState, useEffect } from 'react';
import * as olt from '@lightelligence/styles';
import { shape, func, string, arrayOf, any } from 'prop-types';
import classnames from 'classnames';

import { V2Input } from '../../controls/V2Input';
import { Icon } from '../../components/Icon';

export const DynamicList = ({
  inputElement,
  inputProps,
  onChange,
  values,
  className,
  ...other
}) => {
  const element = inputElement || V2Input;

  const [elements, setElements] = useState([]);
  const [internalValues, setInternalValues] = useState([]);

  // create elements if initial values have been provided
  useEffect(() => {
    const elementsWithInitialValues = values.map((value, index) => {
      element.value = value;
      return element;
    });
    if (elementsWithInitialValues.length === 0)
      elementsWithInitialValues.push(element);
    setElements(elementsWithInitialValues);
  }, [element, values]);
  useEffect(() => setInternalValues(values), [values]);

  // on change : remember the new value, call onChange prop and call elements on change
  const handleTextInput = (index) => (e) => {
    const { value } = e.target;
    const newValues = [...internalValues];
    newValues[index] = value;
    setInternalValues(newValues);
    onChange(newValues);
    if (elements[index] && typeof elements[index].onChange === 'function') {
      elements[index].onChange(value);
    }
  };

  const addElement = () => {
    setElements([...elements, element]);
    const newValues = [...internalValues, ''];
    setInternalValues(newValues); // TODO: any initial value to provide?
    onChange(newValues);
    const index = newValues.length - 1;
    if (elements[index] && typeof elements[index].onChange === 'function') {
      elements[index].onChange('');
    }
  };

  const removeElement = (index) => {
    const newElements = [...elements];
    newElements.splice(index, 1);
    setElements(newElements);
    const newValues = [...internalValues];
    newValues.splice(index, 1);
    setInternalValues(newValues);
    onChange(newValues);
    if (elements[index] && typeof elements[index].onChange === 'function') {
      elements[index].onChange(null);
    }
  };

  const { className: inputClassName, ...otherInputProps } = inputProps;

  return (
    <div className={classnames(olt.DynamicList, className)} {...other}>
      {elements.map((Element, index, allElements) => (
        <div
          className={classnames(
            olt.uDisplayFlex,
            olt.uFlexRow,
            olt.uFlexNowrap,
          )}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          {index === allElements.length - 1 ? (
            <Icon
              name="action-add-circle"
              color={internalValues[index] ? 'primary' : 'gray500'}
              className={classnames(olt.uPaddingTop3, olt.uPaddingRight3)}
              onClick={() => internalValues[index] && addElement()}
            />
          ) : (
            <div className={classnames(olt.uPaddingRight5)} />
          )}
          <Element
            className={inputClassName} // TODO: remove if we don't need other classnames
            value={internalValues[index]}
            {...otherInputProps}
            onChange={handleTextInput(index)}
          />
          {index !== allElements.length - 1 ? (
            <Icon
              name="action-delete"
              color="primary"
              className={classnames(olt.uPaddingTop3, olt.uPaddingLeft3)}
              onClick={() => removeElement(index)}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

DynamicList.propTypes = {
  inputElement: func,
  inputProps: shape({ className: string }),
  onChange: func,
  values: arrayOf(any),
  className: string,
};

DynamicList.defaultProps = {
  inputElement: undefined,
  inputProps: {},
  onChange: () => {},
  values: [],
  className: undefined,
};
