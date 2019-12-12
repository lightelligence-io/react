import React, { useMemo } from 'react';
import * as olt from '@lightelligence/styles';
import { isForwardRef, isFragment } from 'react-is';
import { node, bool, shape, string, oneOf } from 'prop-types';
import classnames from 'classnames';
import { BasicCardTableTitle } from './BasicCardTableTitle';
import { BasicCardTableContent } from './BasicCardTableContent';

const contentRequiresWrapping = (children) => {
  if (Array.isArray(children)) {
    return contentRequiresWrapping(children[0]);
  }
  if (isFragment(children)) {
    return contentRequiresWrapping(children.props.children);
  }

  if (isForwardRef(children)) {
    return false;
  }

  return !children.type || children.type !== BasicCardTableContent;
};

const titleRequiresWrapping = (titleNode) => {
  return !titleNode.type || titleNode.type !== BasicCardTableTitle;
};

export const BasicCardTableCardItem = ({
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
    olt.CardTableCardItem,
    verticalAlign === 'top' && olt.CardTableVerticalAlignTop,
    verticalAlign === 'bottom' && olt.CardTableVerticalAlignBottom,
    align === 'center' && olt.CardTableAlignCenter,
    align === 'right' && olt.CardTableAlignRight,
    firstTableItem && olt.CardTableFirstTableItem,
    lastTableItem && olt.CardTableLastTableItem,
    listOnly && olt.CardTableListOnly,
    tableOnly && olt.CardTableTableOnly,
    halfSize && olt.CardTableHalfSize,
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
        <BasicCardTableTitle {...titleProps}>{title}</BasicCardTableTitle>
      ) : (
        title
      )}
      {!contentWrapperRequired ? (
        children
      ) : (
        <BasicCardTableContent {...contentProps}>
          {children}
        </BasicCardTableContent>
      )}
    </div>
  );
};

BasicCardTableCardItem.propTypes = {
  /**
   * `children` can either contain an arbirary number of `BasicCardTableContent` items or
   * any other node. In the latter case the node is wrapped in an `BasicCardTableContent` component.
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

BasicCardTableCardItem.defaultProps = {
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
