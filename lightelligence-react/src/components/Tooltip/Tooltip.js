import React, { PureComponent } from 'react';
import { string, element, bool } from 'prop-types';

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
    const classes = bottom ? 'olt-Tooltip olt-Tooltip--bottom' : 'olt-Tooltip';
    return (
      <div className={classes} {...props}>
        {children}
        <div className="olt-Tooltip-content">{this.renderMessage()}</div>
      </div>
    );
  }
}

export { Tooltip };
