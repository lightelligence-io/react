import classnames from 'classnames';
import { string, shape, node, bool, func } from 'prop-types';
import React from 'react';
import * as olt from '@lightelligence/styles';
import { Label } from '../../controls/Label';

export const Filter = React.forwardRef(
  (
    {
      className,
      label,
      children,
      labelProps,
      contentProps,
      bubbleProps,
      onClick,
      open,
      bubbleText,
      ...props
    },
    ref,
  ) => {
    return (
      <Label
        label={label}
        value=""
        onClick={onClick}
        {...labelProps}
        /*
           We need the htmlFor, because otherwise the label clicks any inputs
           nested in the Filter
         */
        htmlFor="__LIGHTELLIGENCE_REACT__"
      >
        <div
          ref={ref}
          {...props}
          className={classnames(olt.Filter, open && 'is-open', className)}
        >
          {bubbleText && (
            <div
              {...bubbleProps}
              className={classnames(olt.FilterBubble, bubbleProps.className)}
            >
              {bubbleText}
            </div>
          )}
          <div
            {...contentProps}
            style={{ minHeight: 'auto' }}
            className={classnames(
              olt.FilterContent,
              contentProps,
              className,
              contentProps.className,
            )}
          >
            {children}
          </div>
        </div>
      </Label>
    );
  },
);

Filter.displayName = 'Filter';

Filter.propTypes = {
  /**
   * Bubble text to display on the right side of the filter
   */
  bubbleText: string,
  /**
   * Prop to set if the filter is open
   */
  open: bool,
  /**
   * The floating label
   */
  label: string.isRequired,
  /**
   * Forward an additional className to the underlying element
   */
  className: string,
  /**
   * Content of the filter
   */
  children: node,
  /**
   * Click handler
   */
  onClick: func,
  /**
   * Additional label props
   */
  labelProps: shape({}),
  /**
   * Additional content props
   */
  contentProps: shape({}),
  /**
   * Additional bubble props
   */
  bubbleProps: shape({}),
};

Filter.defaultProps = {
  bubbleText: null,
  open: false,
  className: null,
  children: null,
  labelProps: {},
  contentProps: {},
  bubbleProps: {},
  onClick: () => {},
};
