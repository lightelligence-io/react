import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('renders without failing', () => {
    const { getByTestId, getByText } = render(
      <Pagination
        items={30}
        itemsPerPage={[10, 30, 100]}
        selectedItemsPerPageIndex={1}
        currentPage={1}
        setItemsPerPageIndex={() => {}}
        setPage={() => {}}
        data-testid="pagination"
      />,
    );
    getByTestId('pagination');
    getByText('Show');
    getByText('prev');
    getByText('next');
  });
  test('changes number of items to show', () => {
    const setItemsPerPageIndex = jest.fn();
    const setPage = jest.fn();
    const { container, getByText } = render(
      <Pagination
        items={30}
        itemsPerPage={[10, 30, 100]}
        selectedItemsPerPageIndex={1}
        currentPage={1}
        setItemsPerPageIndex={setItemsPerPageIndex}
        setPage={setPage}
      />,
    );
    const itemsToChoose = getByText('30');
    fireEvent.focus(container.querySelector('select'));
    fireEvent.keyDown(container.querySelector('select'), {
      key: 'ArrowDown',
      code: 40,
    });
    fireEvent.select(itemsToChoose);
    // expect(setItemsPerPageIndex).toHaveBeenCalled();
  });
  test('goes to next page', () => {
    const setItemsPerPageIndex = jest.fn();
    const setPage = jest.fn();
    const { getByText } = render(
      <Pagination
        items={30}
        itemsPerPage={[10, 30, 100]}
        selectedItemsPerPageIndex={0}
        currentPage={1}
        setItemsPerPageIndex={setItemsPerPageIndex}
        setPage={setPage}
      />,
    );
    const nextButton = getByText('next');
    fireEvent.click(nextButton);
    expect(setPage).toHaveBeenCalled();
  });
  test('goes to previous page', () => {
    const setItemsPerPageIndex = jest.fn();
    const setPage = jest.fn();
    const { getByText } = render(
      <Pagination
        items={30}
        itemsPerPage={[10, 30, 100]}
        selectedItemsPerPageIndex={0}
        currentPage={2}
        setItemsPerPageIndex={setItemsPerPageIndex}
        setPage={setPage}
      />,
    );
    const prevButton = getByText('prev');
    fireEvent.click(prevButton);
    expect(setPage).toHaveBeenCalled();
  });
});
