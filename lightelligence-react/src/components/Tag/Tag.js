import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { bool, func, string, node } from 'prop-types';
// import { colorProp, childrenProp } from '../../propTypes';
// replaced with string & node, otherwise we need to maintain the prop types
// definition, which doesn't add a lot of benefits
import { OLT_NAMESPACE } from '../../constants';

class Tag extends PureComponent {
  static propTypes = {
    className: string,
    color: string,
    children: node,
    outline: bool,
    selectable: bool,
    icon: node,
    onClick: func,
  };

  static defaultProps = {
    className: null,
    children: null,
    outline: false,
    selectable: false,
    icon: null,
    onClick: null,
    color: null,
  };

  handleClick = (e) => {
    const { selectable, onClick } = this.props;
    if (selectable) {
      onClick(e);
    }
  };

  render() {
    const {
      className,
      children,
      color,
      outline,
      selectable,
      onClick,
      ...props
    } = this.props;
    const base = `${OLT_NAMESPACE}Tag`;
    const Element = selectable ? 'button' : 'span';

    return (
      <Element
        {...props}
        onClick={this.handleClick}
        className={classnames(
          base,
          onClick && `${base}--selectable`,
          outline && `${base}--outline`,
          color && `${base}--${color}`,
          className,
        )}
      >
        {children}
      </Element>
    );
  }
}

export { Tag };
