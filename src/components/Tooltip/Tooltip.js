import React from 'react';
import { string, element, bool } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

const TooltipMessage = ({ message, wide = false }) =>
  wide ? <p>{message}</p> : <span>{message}</span>;

TooltipMessage.defaultProps = {
  wide: false,
};

TooltipMessage.propTypes = {
  message: string.isRequired,
  wide: bool,
};

const Tooltip = ({
  bottom,
  children,
  color,
  contentClassName,
  message,
  wide,
  ...props
}) => {
  return (
    <div
      className={classnames(olt.Tooltip, bottom && olt.TooltipBottom)}
      {...props}
    >
      {children}
      <div
        className={classnames(
          olt.TooltipContent,
          color && olt[`Tooltip${pascalize(color)}`],
          contentClassName,
        )}
      >
        <TooltipMessage wide={wide} message={message} />
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  contentClassName: string,
  color: string,
  message: string.isRequired,
  children: element.isRequired,
  wide: bool,
  bottom: bool,
};

Tooltip.defaultProps = {
  contentClassName: null,
  color: null,
  wide: false,
  bottom: false,
};

export { Tooltip };
