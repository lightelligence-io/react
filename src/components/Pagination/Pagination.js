import React, { useCallback, useRef, useEffect, useState } from 'react';
import { number, arrayOf, func } from 'prop-types';
import classnames from 'classnames';
import * as olt from '@lightelligence/styles';
import { V2Select } from '../../controls/V2Select';
import { Description } from '../../content/Fonts';
import { V2Button } from '../V2Button';

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
    setIsMobile(
      paginationBar.current.clientWidth < parseInt(olt.theme.breakpoint.sm, 10),
    );
  }, [paginationBar]);

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
  const endItem = Math.min(startItem + noOfItemsPerPage, items);

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
        <V2Select
          options={options}
          value={`${selectedItemsPerPageIndex}`}
          onChange={(e) => setItemsPerPageIndex(parseInt(e.target.value, 10))}
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
          <V2Button
            buttonType="paginationPrev"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            prev
          </V2Button>
          <V2Button
            buttonType="paginationNext"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage >= noOfPages}
          >
            next
          </V2Button>
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
   */
  setItemsPerPageIndex: func,
  /**
   * Callback, when the user moves between pages.
   */
  setPage: func,
};

Pagination.defaultProps = {
  setItemsPerPageIndex: () => {},
  setPage: () => {},
};

export { Pagination };
