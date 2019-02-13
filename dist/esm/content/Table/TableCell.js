import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { string, any, func } from 'prop-types';
import classnames from 'classnames';
import { OLT_NAMESPACE } from '../../constants';
/**
 * Define the cell rendering item
 *
 * @props rowIndex dynamic prop, passed from parent
 * @props cellIndex dynamic prop, passed from parent
 * @info the full row will be pass to renderer if defined renderer function
 */

class TableCell extends PureComponent {
  get value() {
    const {
      row,
      field,
      renderer
    } = this.props;

    try {
      if (typeof renderer === 'function') {
        return renderer(row, field, this);
      }
    } catch (e) {
      console.warn(`Cell renderer error [${field}]`, e); // eslint-disable-line no-console

      return null;
    }

    if (Object.prototype.hasOwnProperty.call(row, field)) {
      return row[field];
    }

    return null;
  }

  render() {
    const _this$props = this.props,
          {
      row,
      field,
      renderer,
      className
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["row", "field", "renderer", "className"]);

    const classes = classnames(`${OLT_NAMESPACE}Table-data`, className);
    return React.createElement("td", _extends({
      className: classes
    }, props), ' ', this.value);
  }

}

_defineProperty(TableCell, "propTypes", {
  /**
   * define the key if object
   */
  field: string.isRequired,
  // eslint-disable-line react/no-unused-prop-types

  /**
   * mixed type, could be everything
   */
  row: any,
  // eslint-disable-line react/forbid-prop-types

  /**
   * optional rendering function
   * @info not use field to resolve the line, always use the row data
   */
  renderer: func,
  className: string
});

_defineProperty(TableCell, "defaultProps", {
  row: null,
  renderer: null,
  className: null
});

export { TableCell };