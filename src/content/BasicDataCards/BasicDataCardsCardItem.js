import React, { Fragment, useMemo } from 'react';
import * as olt from '@lightelligence/styles';
import { node, bool, shape, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { BasicDataCardsTitle } from './BasicDataCardsTitle';
import { BasicDataCardsContent } from './BasicDataCardsContent';

const contentRequiresWrapping = (children) => {
  if (Array.isArray(children)) {
    return contentRequiresWrapping(children[0]);
  }
  if (children.type === Fragment) {
    return contentRequiresWrapping(children.props.children);
  }

  return !children.type || children.type !== BasicDataCardsContent;
};

const titleRequiresWrapping = (titleNode) => {
  return !titleNode.type || titleNode.type !== BasicDataCardsTitle;
};

export const BasicDataCardsCardItem = ({
  title,
  children,
  listOnly,
  tableOnly,
  className,
  titleProps,
  contentProps,
  firstTableItem,
  lastTableItem,
  halfSize,
  verticalAlign,
  align,
  ...other
}) => {
  const classes = classnames(
    olt.DataCardsCardItem,
    verticalAlign === 'top' && olt.DataCardsVerticalAlignTop,
    verticalAlign === 'bottom' && olt.DataCardsVerticalAlignBottom,
    align === 'center' && olt.DataCardsAlignCenter,
    align === 'right' && olt.DataCardsAlignRight,
    firstTableItem && olt.DataCardsFirstTableItem,
    lastTableItem && olt.DataCardsLastTableItem,
    listOnly && olt.DataCardsListOnly,
    tableOnly && olt.DataCardsTableOnly,
    halfSize && olt.DataCardsHalfSize,
    className,
  );
  const contentWrapperRequired = useMemo(
    () => children && contentRequiresWrapping(children),
    [children],
  );
  const titleWrapperRequired = useMemo(
    () => title && titleRequiresWrapping(title),
    [title],
  );

  return (
    <div className={classes} {...other}>
      {titleWrapperRequired ? (
        <BasicDataCardsTitle {...titleProps}>{title}</BasicDataCardsTitle>
      ) : (
        title
      )}
      {!contentWrapperRequired ? (
        children
      ) : (
        <BasicDataCardsContent {...contentProps}>
          {children}
        </BasicDataCardsContent>
      )}
    </div>
  );
};

BasicDataCardsCardItem.propTypes = {
  /**
   * `children` can either contain an arbirary number of `BasicDataCardsContent` items or
   * any other node. In the latter case the node is wrapped in an `BasicDataCardsContent` component.
   */
  children: node,
  /**
   * A `title` which is rendered above the content in list mode.
   */
  title: node,
  /**
   * When `true` this item is only visible when Data Cards are rendered in list mode.
   */
  listOnly: bool,
  /**
   * When `true` this item is only visible when Data Cards are rendered in table mode.
   */
  tableOnly: bool,
  /**
   * Forward an additional className to the underlying component.
   */
  className: string,
  /**
   * Additional properties to forward to the title component.
   */
  titleProps: shape({ className: string }),
  /**
   * Additional properties to forward to the content component.
   */
  contentProps: shape({ className: string }),
  /**
   * Explicit indicator that this item is the first on a card in table mode.
   */
  firstTableItem: bool,
  /**
   * Explicit indicator that this item is the last on a card in table mode.
   */
  lastTableItem: bool,
  /**
   * Items takes up only 50% instead of 100% width in list mode.
   */
  halfSize: bool,
  /**
   * Vertical alignment of item in table mode.
   */
  verticalAlign: oneOf(['bottom', 'top', 'center']),
  /**
   * Horizontal alignment of item in table mode.
   */
  align: oneOf(['left', 'right', 'center']),
};

BasicDataCardsCardItem.defaultProps = {
  children: undefined,
  title: undefined,
  listOnly: false,
  tableOnly: false,
  className: undefined,
  titleProps: {},
  contentProps: {},
  firstTableItem: false,
  lastTableItem: false,
  halfSize: false,
  verticalAlign: 'center',
  align: 'left',
};
