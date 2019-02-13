import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { PureComponent } from 'react';
import { number, bool } from 'prop-types';
import { OLT_NAMESPACE } from '../../constants';
/**
 * Define the cell rendering item with current index
 *
 * @props rowIndex dynamic prop, passed from parent
 * @props cellIndex dynamic prop, passed from parent
 */

class TableCellRowIndex extends PureComponent {
  get value() {
    const {
      rowIndex,
      increase
    } = this.props;
    return increase ? rowIndex + 1 : rowIndex;
  }

  render() {
    return React.createElement("td", {
      className: `${OLT_NAMESPACE}Table-data`
    }, this.value);
  }

}

_defineProperty(TableCellRowIndex, "propTypes", {
  increase: bool,
  rowIndex: number
});

_defineProperty(TableCellRowIndex, "defaultProps", {
  increase: true,
  rowIndex: 0
});

export { TableCellRowIndex };