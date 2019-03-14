import React, { PureComponent } from 'react';
import { string, any, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';

/**
 * Define the cell rendering item
 *
 * @props rowIndex dynamic prop, passed from parent
 * @props cellIndex dynamic prop, passed from parent
 * @info the full row will be pass to renderer if defined renderer function
 */
class TableCell extends PureComponent {
  static propTypes = {
    /**
     * define the key if object
     */
    field: string.isRequired, // eslint-disable-line react/no-unused-prop-types

    /**
     * mixed type, could be everything
     */
    row: any, // eslint-disable-line react/forbid-prop-types

    /**
     * optional rendering function
     * @info not use field to resolve the line, always use the row data
     */
    renderer: func,

    className: string,
  };

  static defaultProps = {
    row: null,
    renderer: null,
    className: null,
  };

  get value() {
    const { row, field, renderer } = this.props;

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
    const { row, field, renderer, className, ...props } = this.props;
    return (
      <td className={classnames(olt.TableData, className)} {...props}>
        {' '}
        {this.value}
      </td>
    );
  }
}

export { TableCell };
