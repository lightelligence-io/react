import React, { useMemo } from 'react';
import { shape, node, func, string, bool } from 'prop-types';
import { BasicCardTableCardItem } from '../BasicCardTable';

export const CardTableItem = ({
  withoutTitle,
  render,
  renderProps,
  data,
  field,
  title,
  ...other
}) => {
  const content = useMemo(() => {
    if (!data) return null;
    if (render) return render(data);
    if (field) return data.row[field];
    return '';
  }, [data, render, field]);

  const props = useMemo(() => {
    if (!data) return null;
    const curProps = renderProps && renderProps(data);
    return curProps && other ? { ...other, ...curProps } : curProps || other;
  }, [data, renderProps, other]);

  if (!data) return null;

  const finalTitle = withoutTitle
    ? undefined
    : title || (data.field && data.field.label);

  return (
    <BasicCardTableCardItem title={finalTitle} {...props}>
      {content}
    </BasicCardTableCardItem>
  );
};

CardTableItem.propTypes = {
  /**
   * The `render` function receives on object with two fields and should return
   * the content of the currently rendered `BasicCardTableCardItem`.
   * The two fields are `row` and `field`. The former contains the data
   * of the current row, while the latter contains the field data of the current
   * column.
   */
  render: func,
  /**
   * The `renderProps` function receives the same object as `render` and should return
   * an object which is forwarded as `props` to the underlying `BasicCardTableCardItem` component.
   */
  renderProps: func,
  /**
   * This **internal** property is provided by the parent `CardTable` component directly.
   * Do not set this explicitly.
   */
  data: shape({
    field: shape({ label: node.isRequired }),
    row: shape({}),
  }),
  /**
   * By default this component will render the `label` field of the current `field` object when no
   * title is provided. To suppress this behaviour set this property to `true`.
   */
  withoutTitle: bool,
  /**
   * When a `field` is specified and no `render` function is given, this component tries to render
   * the same field of the current row directly as it's content. Providing this property will
   * additionally render the label of the coresponding `field` object as title.
   */
  field: string,
  /**
   * Providing an explicit `title` will always take precedence before
   * the `label` of the current `field` object is used as a title fallback.
   */
  title: node,
};

CardTableItem.defaultProps = {
  render: undefined,
  renderProps: undefined,
  data: undefined,
  field: undefined,
  title: undefined,
  withoutTitle: false,
};
