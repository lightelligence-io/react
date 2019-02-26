import React, { PureComponent } from 'react';
import { number, bool } from 'prop-types';
import * as olt from '@lightelligence/lightelligence-ui';

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
  };

  static defaultProps = {
    increase: true,
    rowIndex: 0,
  };

  get value() {
    const { rowIndex, increase } = this.props;
    return increase ? rowIndex + 1 : rowIndex;
  }

  render() {
    return <td className={olt.TableData}>{this.value}</td>;
  }
}

export { TableCellRowIndex };
