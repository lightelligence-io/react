import React, { PureComponent } from 'react';
import { string, element, bool } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/lightelligence-ui';

class Tooltip extends PureComponent {
  static propTypes = {
    message: string.isRequired,
    children: element.isRequired,
    wide: bool,
    bottom: bool,
  };

  static defaultProps = {
    wide: false,
    bottom: false,
  };

  renderMessage() {
    const { message, wide } = this.props;

    return wide ? <p>{message}</p> : <span>{message}</span>;
  }

  render() {
    const { children, wide, bottom, ...props } = this.props;
    return (
      <div
        className={classnames(olt.Tooltip, bottom && olt.TooltipBottom)}
        {...props}
      >
        {children}
        <div className={olt.TooltipContent}>{this.renderMessage()}</div>
      </div>
    );
  }
}

export { Tooltip };
