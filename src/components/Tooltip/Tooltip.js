import React, { PureComponent } from 'react';
import { string, element, bool } from 'prop-types';
import classnames from 'classnames';
import { pascalize } from 'humps';
import * as olt from '@lightelligence/styles';

class Tooltip extends PureComponent {
  static propTypes = {
    contentClassName: string,
    color: string,
    message: string.isRequired,
    children: element.isRequired,
    wide: bool,
    bottom: bool,
  };

  static defaultProps = {
    contentClassName: null,
    color: null,
    wide: false,
    bottom: false,
  };

  renderMessage() {
    const { message, wide } = this.props;

    return wide ? <p>{message}</p> : <span>{message}</span>;
  }

  render() {
    const {
      children,
      contentClassName,
      color,
      wide,
      bottom,
      ...props
    } = this.props;
    return (
      <div
        className={classnames(olt.Tooltip, bottom && olt.TooltipBottom)}
        {...props}
      >
        {children}
        <div
          className={classnames(
            olt.TooltipContent,
            color && olt[`TooltipContent${pascalize(color)}`],
            contentClassName,
          )}
        >
          {this.renderMessage()}
        </div>
      </div>
    );
  }
}

export { Tooltip };
