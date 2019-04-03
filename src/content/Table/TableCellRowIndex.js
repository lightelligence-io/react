import React, { PureComponent } from 'react';
import { number, bool } from 'prop-types';
import * as olt from '@lightelligence/styles';

/**
 * Define the cell rendering item with current index
 *
 * @props rowIndex dynamic prop, passed from parent
 * @props cellIndex dynamic prop, passed from parent
 */
class TableCellRowIndex extends PureComponent {
  static propTypes = {
    increase: bool,
    rowIndex: number,
    cellIndex: number,
  };

  static defaultProps = {
    increase: true,
    rowIndex: 0,
    cellIndex: undefined,
  };

  render() {
    const {
      rowIndex,
      increase,
      cellIndex, // eslint-disable-line no-unused-vars
      ...props
    } = this.props;
    const value = increase ? rowIndex + 1 : rowIndex;
    return (
      <td className={olt.TableData} {...props}>
        {value}
      </td>
    );
  }
}

export { TableCellRowIndex };
