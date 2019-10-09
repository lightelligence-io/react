import React, { PureComponent } from 'react';
import { string, number, node, shape, arrayOf, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { V2Select } from '../../controls/V2Select';
import { Description } from '../../content/Fonts';
import { V2Button } from '../V2Button';
import { V2Grid, V2GridItem } from '../../layout/V2Grid';

export class Pagination extends PureComponent {
  static propTypes = {
    currentPage: number.isRequired,
    items: number.isRequired,
    itemsPerPage: arrayOf(number).isRequired,
    selectedItemsPerPageIndex: number.isRequired,
    setItemsPerPage: func,
    setPage: func,
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

    const options = itemsPerPage.map((item, index) => ({
      label: `${item}`,
      value: `${index}`,
    }));
    const noOfItemsPerPage = itemsPerPage[selectedItemsPerPageIndex];
    const noOfPages = Math.ceil(items / noOfItemsPerPage);
    const startItem = (currentPage - 1) * noOfItemsPerPage + 1;
    const endItem = Math.min(startItem + noOfItemsPerPage, items);

    return (
      <V2Grid
        className={classnames(
          className,
          olt.uAlignItemsCenter,
          olt.uJustifyContentCenter,
        )}
        style={{ minWidth: '435px' }}
        {...props}
      >
        <V2GridItem xs={4}>
          <V2Grid
            className={classnames(
              olt.uAlignItemsCenter,
              olt.uJustifyContentCenter,
            )}
          >
            <V2GridItem xs={4}>
              <Description color="500">Show</Description>
            </V2GridItem>
            <V2GridItem xs={8}>
              <V2Select
                options={options}
                value={`${selectedItemsPerPageIndex}`}
                onChange={(e) => setItemsPerPage(parseInt(e.target.value, 10))}
                label="Select Label"
                pagination
              />
            </V2GridItem>
          </V2Grid>
        </V2GridItem>
        <V2GridItem xs={4}>
          <Description color="500">
            {startItem}-{endItem} of {items}
          </Description>
        </V2GridItem>
        <V2GridItem xs={2}>
          <V2Button
            buttonType="paginationPrev"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            prev
          </V2Button>
        </V2GridItem>
        <V2GridItem xs={2}>
          <V2Button
            buttonType="paginationNext"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= noOfPages}
          >
            next
          </V2Button>
        </V2GridItem>
      </V2Grid>
    );
  }
}
