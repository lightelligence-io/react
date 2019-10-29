import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Filter } from './Filter';
import { oltStyles } from '../..';

const renderFilter = (props) => {
  return render(
    <Filter
      items={30}
      itemsPerPage={[5, 10, 30, 100]}
      selectedItemsPerPageIndex={1}
      currentPage={2}
      setItemsPerPageIndex={() => {}}
      setPage={() => {}}
      data-testid="filter"
      {...props}
    />,
  );
};

describe('Filter', () => {
  test('renders correctly', () => {
    const { getByTestId, getByText } = renderFilter();
    const filter = getByTestId('filter');

    const showText = getByText('Show');
    expect(showText.classList.contains(oltStyles.uDescription)).toBe(true);

    const select = filter.getElementsByTagName('select')[0];
    expect(select.classList.contains(oltStyles.V2Select)).toBe(true);
    expect(select.classList.contains(oltStyles.V2SelectFilter)).toBe(true);

    const pageText = getByText('11-20 of 30');
    expect(pageText.classList.contains(oltStyles.uDescription)).toBe(true);

    const prevButton = getByText('prev');
    expect(prevButton.classList.contains(oltStyles.V2Button)).toBe(true);
    expect(prevButton.classList.contains(oltStyles.V2ButtonFilterPrev)).toBe(
      true,
    );

    const nextButton = getByText('next');
    expect(nextButton.classList.contains(oltStyles.V2Button)).toBe(true);
    expect(nextButton.classList.contains(oltStyles.V2ButtonFilterNext)).toBe(
      true,
    );
  });
  test('goes to next page', () => {
    const setItemsPerPageIndex = jest.fn();
    const setPage = jest.fn();
    const { getByText } = renderFilter({
      setItemsPerPageIndex,
      setPage,
    });
    const nextButton = getByText('next');
    fireEvent.click(nextButton);
    expect(setPage).toHaveBeenCalledWith(3);
  });
  test('disables next button on last page', () => {
    const { getByText } = renderFilter({
      selectedItemsPerPageIndex: 2,
    });
    const nextButton = getByText('next');
    expect(nextButton.disabled).toBe(true);
  });
  test('goes to previous page', () => {
    const setItemsPerPageIndex = jest.fn();
    const setPage = jest.fn();
    const { getByText } = renderFilter({
      setItemsPerPageIndex,
      setPage,
    });
    const prevButton = getByText('prev');
    fireEvent.click(prevButton);
    expect(setPage).toHaveBeenCalledWith(1);
  });
  test('disables prev button on first page', () => {
    const { getByText } = renderFilter({
      currentPage: 1,
    });
    const prevButton = getByText('prev');
    expect(prevButton.disabled).toBe(true);
  });
  test('increases number of items to show and suggests new page', () => {
    const setItemsPerPageIndex = jest.fn();
    const selectEvent = { label: 30, value: 2 };
    const { getByTestId } = renderFilter({
      setItemsPerPageIndex,
    });
    const filter = getByTestId('filter');
    const select = filter.getElementsByTagName('select')[0];
    fireEvent.change(select, { target: selectEvent });
    expect(setItemsPerPageIndex).toHaveBeenCalledWith(selectEvent.value, 1);
  });
  test('decreases number of items to show and suggests new page', () => {
    const setItemsPerPageIndex = jest.fn();
    const selectEvent = { label: 5, value: 0 };
    const { getByTestId } = renderFilter({
      setItemsPerPageIndex,
    });
    const filter = getByTestId('filter');
    const select = filter.getElementsByTagName('select')[0];
    fireEvent.change(select, { target: selectEvent });
    expect(setItemsPerPageIndex).toHaveBeenCalledWith(selectEvent.value, 3);
  });
});
