
## Description

The input list item is used to inside a [InputList](#/Content/InputList) simplify the rendering of [Dropdown](#/Components/Dropdown) components for basic content.

```jsx
import { InputList, InputListItem } from '@lightelligence/react';
const onChange = (value) => {
  console.log(`changed to ${value}`);
};
<InputList onChange={onChange}>
  <InputListItem value="1">Item 1</InputListItem>
  <InputListItem value="2">Item 2</InputListItem>
  <InputListItem value="3">Item 3</InputListItem>
</InputList>;
```
