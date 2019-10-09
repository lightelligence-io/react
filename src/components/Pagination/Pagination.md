```js
import { Pagination } from '@lightelligence/react';
initialState = {
    currentPage: 1,
    items: 30,
    itemsPerPage: [10, 30, 100],
    selectedItemsPerPageIndex: 0,
};
const setItemsPerPageIndex = (selectedItemsPerPageIndex) => {
    setState({ selectedItemsPerPageIndex });
};
const setPage = (currentPage) => {
    setState({ currentPage });
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
