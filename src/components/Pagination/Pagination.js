import React, { PureComponent } from 'react';
import { string, number, node, shape, arrayOf } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { Select } from '../../controls/Select';
import { Description } from '../../content/Fonts';
import { V2Button } from '../V2Button';

export class Pagination extends PureComponent {
  static propTypes = {
    currentPage: number.isRequired,
    items: number.isRequired,
    itemsPerPage: arrayOf(number).isRequired,
    selectedItemsPerPageIndex: number.isRequired,
    setItemsPerPage: Function,
    setPage: Function,
    className: string,
    children: node,
    style: shape({}),
  };

  static defaultProps = {
    setItemsPerPage: () => {},
    setPage: () => {},
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
      setItemsPerPage,
      setPage,
      className,
      children,
      style,
      ...props
    } = this.props;
    const options = [];
    for (let i = 0; i < itemsPerPage.length; i += 1) {
      options.push({ label: `${itemsPerPage[i]}`, value: `${i}` });
    }
    const noOfItemsPerPage = itemsPerPage[selectedItemsPerPageIndex];
    const noOfPages = Math.ceil(items / noOfItemsPerPage);
    const startItem = (currentPage - 1) * noOfItemsPerPage + 1;
    const endItem = Math.min(startItem + noOfItemsPerPage, items);

    return (
      <div
        style={{ ...style, display: 'block' }}
        className={classnames(olt.Label, className)}
        {...props}
      >
        <div>
          <Description>Show</Description>
          <Select
            options={options}
            value={`${selectedItemsPerPageIndex}`}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
            label="Select Label"
          />
        </div>
        <Description>
          {startItem}-{endItem} of {items}
        </Description>

        <V2Button
          buttonType="pagination"
          emphasis="secondary"
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </V2Button>
        <V2Button
          buttonType="pagination"
          emphasis="secondary"
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage >= noOfPages}
        >
          Next
        </V2Button>
        {children}
      </div>
    );
  }
}
