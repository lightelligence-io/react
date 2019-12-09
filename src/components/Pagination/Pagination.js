import React, { useCallback, useRef, useEffect, useState } from 'react';
import { number, arrayOf, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { getBreakpointWidth } from '../../utils/breakpoints';
import { Select } from '../../controls/Select';
import { Description } from '../../content/Fonts';
import { Button } from '../Button';

const Pagination = ({
  currentPage,
  items,
  itemsPerPage,
  selectedItemsPerPageIndex,
  setItemsPerPageIndex,
  setPage,
  ...props
}) => {
  const paginationBar = useRef();
  const [isMobile, setIsMobile] = useState({ isMobile: 0 });

  const setMobileFlag = useCallback(() => {
    setIsMobile(paginationBar.current.clientWidth < getBreakpointWidth('sm'));
  }, []);

  useEffect(() => {
    setMobileFlag();
    window.addEventListener('resize', setMobileFlag);
  }, [setMobileFlag]);

  const options = itemsPerPage.map((item, index) => ({
    label: `${item}`,
    value: `${index}`,
  }));
  const noOfItemsPerPage = itemsPerPage[selectedItemsPerPageIndex];
  const noOfPages = Math.ceil(items / noOfItemsPerPage);
  const startItem = (currentPage - 1) * noOfItemsPerPage + 1;
  const endItem = Math.min(startItem + noOfItemsPerPage - 1, items);

  const handleChangeItemsPerPage = (value) => {
    const index = parseInt(value, 10);

    let newCurrentPage = currentPage;
    const newNoOfItemsPerPage = itemsPerPage[index];
    const newStartItem = (currentPage - 1) * newNoOfItemsPerPage + 1;

    // different items per page => suggest page to make sure the first item is still visible
    if (newNoOfItemsPerPage !== noOfItemsPerPage) {
      newCurrentPage =
        currentPage -
        Math.ceil((newStartItem - startItem) / newNoOfItemsPerPage);
    }

    setItemsPerPageIndex(index, newCurrentPage);
  };

  const baseClasses = classnames(
    olt.uDisplayFlex,
    olt.uAlignItemsCenter,
    olt.uJustifyContentAround,
  );

  return (
    <div
      className={classnames(baseClasses)}
      {...props}
      style={{ minWidth: '250px' }}
      ref={paginationBar}
    >
      <div className={classnames(baseClasses, isMobile && olt.uFlexColumn)}>
        <div style={{ padding: '8px' }}>
          <Description color="500">Show</Description>
        </div>
        <Select
          options={options}
          value={`${selectedItemsPerPageIndex}`}
          onChange={(e) => handleChangeItemsPerPage(e.target.value)}
          label="Select Label"
          pagination
        />
      </div>
      <div
        className={classnames(
          baseClasses,
          isMobile && olt.uFlexColumn,
          isMobile && olt.uAlignItemsEnd,
        )}
        style={{ flex: 1 }}
      >
        <div
          className={classnames(
            olt.uDisplayFlex,
            olt.uFlexNowrap,
            olt.uJustifyContentCenter,
          )}
          style={{ flex: 1, whiteSpace: 'nowrap', padding: '8px 0px' }}
        >
          <Description color="500">
            {startItem}-{endItem} of {items}
          </Description>
        </div>
        <div
          className={classnames(
            olt.uDisplayFlex,
            olt.uFlexNowrap,
            olt.uJustifyContentBetween,
          )}
          style={{ minWidth: '165px' }}
        >
          <Button
            buttonType="paginationPrev"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            prev
          </Button>
          <Button
            buttonType="paginationNext"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= noOfPages}
          >
            next
          </Button>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  /**
   * The number of the page currently shown.
   */
  currentPage: number.isRequired,
  /**
   * The total number of items shown.
   */
  items: number.isRequired,
  /**
   * The list of numbers of items per page that the user can select from.
   */
  itemsPerPage: arrayOf(number).isRequired,
  /**
   * The index of the selected entry from the itemsPerPage array. I.e. the pointer to the currently shown number of items per page.
   */
  selectedItemsPerPageIndex: number.isRequired,
  /**
   * Callback, when the user changes the number of items per page.
   * @param selectedItemsPerPageIndex the index of the selected item of the itemsPerPage array <br/>
   * @param page a suggestion for the new page to set (calculated to contain the first element of the current page, you can use this element as your new currentPage or calculate your own)
   */
  setItemsPerPageIndex: func,
  /**
   * Callback, when the user moves between pages.
   * @param page the new page number
   */
  setPage: func,
};

Pagination.defaultProps = {
  setItemsPerPageIndex: () => {},
  setPage: () => {},
};

export { Pagination };
