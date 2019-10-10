```js
import { Pagination } from '@lightelligence/react';
initialState = {
    currentPage: 1,
    items: 30,
    itemsPerPage: [5, 10, 30, 100],
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
