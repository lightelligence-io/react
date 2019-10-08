import React, { PureComponent } from 'react';
import { string, number, node, shape, arrayOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { Select } from '../../controls/Select';
import { V2Button } from '../V2Button';

export class Pagination extends PureComponent {
  static propTypes = {
    currentPage: number.isRequired,
    items: number.isRequired,
    itemsPerPage: arrayOf(number).isRequired,
    selectedItemsPerPageIndex: number.isRequired,
    onChange: Function,
    className: string,
    children: node,
    style: shape({}),
  };

  static defaultProps = {
    onChange: () => {},
    className: null,
    children: null,
    style: undefined,
  };

  render() {
    const {
      currentPage,
      items,
      itemsPerPage,
      selectedItemsPerPageIndex,
      onChange,
      className,
      children,
      style,
      ...props
    } = this.props;
    // const pages = Math.ceil(items / itemsPerPage)
    const options = [];
    for (let i = 0; i < itemsPerPage.length; i += 1) {
      options.push({ label: `${itemsPerPage[i]}`, value: `${i}` });
    }
    return (
      <div
        style={{ ...style, display: 'block' }}
        className={classnames(olt.Label, className)}
        {...props}
      >
        <div>
          Show
          <Select
            options={options}
            value={`${selectedItemsPerPageIndex}`}
            onChange={onChange}
            label="Select Label"
          />
        </div>

        <V2Button buttonType="pagination" emphasis="secondary">
          Prev
        </V2Button>
        <V2Button buttonType="pagination" emphasis="secondary">
          Next
        </V2Button>
        {children}
      </div>
    );
  }
}
