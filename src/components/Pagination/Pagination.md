## Description

The pagination component is used to help people move between a large number of items that are distributed across multiple pages whenever there are too many results to show at once. This will be most useful in things like table listings, search results, and directories.

Pagination allows you to display a small set of results so that the viewer isn't overwhelmed by too much information.

```js
import { Pagination } from '@lightelligence/react';
initialState = {
    currentPage: 1,
    items: 30,
    itemsPerPage: [2, 5, 10, 30, 100],
    selectedItemsPerPageIndex: 1,
};
const setItemsPerPageIndex = (selectedItemsPerPageIndex, page) => {
    setState({ selectedItemsPerPageIndex, currentPage: page });
};
const setPage = (page) => {
    setState({ currentPage: page });
};

<Pagination
    items={state.items}
    itemsPerPage={state.itemsPerPage}
    selectedItemsPerPageIndex={state.selectedItemsPerPageIndex}
    currentPage={state.currentPage}
    setItemsPerPageIndex={setItemsPerPageIndex}
    setPage={setPage}
/>
```
