import React, { useState, useEffect, useCallback } from 'react';
import * as olt from '@lightelligence/styles';
import { shape, func, string, number, arrayOf, any } from 'prop-types';
import classnames from 'classnames';

import { V2Input } from '../../controls/V2Input';
import { V2Button } from '../../components/V2Button';
import { ActionButton } from '../../components/ActionButton';

export const DynamicList = ({
  maxItems,
  minItems,
  inputElement,
  inputProps,
  onChange,
  onSubmit,
  submitLabel,
  values,
  className,
  ...other
}) => {
  const element = inputElement || V2Input;

  const [elements, setElements] = useState([]);
  const [internalValues, setInternalValues] = useState([]);

  const resetFields = useCallback(() => {
    const elementsWithInitialValues = (values || []).map((value, index) => {
      element.value = value;
      return element;
    });
    while (elementsWithInitialValues.length <= (minItems || 0)) {
      elementsWithInitialValues.push(element);
    }
    setElements(elementsWithInitialValues);
  }, [values, element, minItems]);

  // create elements if initial values have been provided
  useEffect(() => {
    resetFields();
  }, [resetFields, element, values]);
  useEffect(() => setInternalValues(values), [values]);

  // on change : remember the new value, call onChange prop and call elements on change
  const handleTextInput = (index) => (e) => {
    const { value } = e.target;
    const newValues = [...internalValues];
    newValues[index] = value;
    setInternalValues(newValues);
    if (typeof onChange === 'function') onChange(newValues);
    if (elements[index] && typeof elements[index].onChange === 'function') {
      elements[index].onChange(value);
    }
  };

  const handleSubmit = () => {
    if (typeof onSubmit === 'function') onSubmit(internalValues);
    setInternalValues(values);
    resetFields();
  };

  const addElement = () => {
    setElements([...elements, element]);
    const newValues = [...internalValues, ''];
    setInternalValues(newValues); // TODO: any initial value to provide?
    if (typeof onChange === 'function') onChange(newValues);
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
    <div
      className={classnames(olt.uDisplayFlex, olt.uFlexColumn, className)}
      {...other}
    >
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
            <ActionButton
              iconLeft="action-add-circle"
              standalone
              buttonType={internalValues[index] ? 'primary' : 'default'}
              disabled={
                !internalValues[index] ||
                (maxItems !== null &&
                  maxItems !== undefined &&
                  index + 1 >= maxItems)
              }
              className={classnames(olt.uMarginTop2, olt.uMarginRight2)}
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
            <ActionButton
              iconLeft="action-delete"
              standalone
              buttonType="primary"
              disabled={
                !internalValues[index] ||
                (minItems !== null &&
                  minItems !== undefined &&
                  internalValues.length <= minItems)
              }
              className={classnames(olt.uMarginTop2, olt.uMarginLeft2)}
              onClick={() => removeElement(index)}
            />
          ) : null}
        </div>
      ))}
      <V2Button
        className={classnames(olt.uMarginTop3)}
        buttonType="action"
        onClick={handleSubmit}
        disabled={
          internalValues.length === 0 ||
          (internalValues.length === 1 && internalValues[0].trim() === '') ||
          internalValues.reduce(
            (allSet, v, index) =>
              allSet || (v.trim() === '' && index < (minItems || 0)),
            false,
          )
        }
        style={{ alignSelf: 'flex-end' }}
      >
        {submitLabel || 'Ok'}
      </V2Button>
    </div>
  );
};

DynamicList.propTypes = {
  maxItems: number,
  minItems: number,
  inputElement: func,
  inputProps: shape({ className: string }),
  onChange: func,
  onSubmit: func,
  submitLabel: string,
  values: arrayOf(any),
  className: string,
};

DynamicList.defaultProps = {
  maxItems: undefined,
  minItems: undefined,
  inputElement: undefined,
  inputProps: {},
  onChange: () => {},
  onSubmit: () => {},
  submitLabel: undefined,
  values: [],
  className: undefined,
};
