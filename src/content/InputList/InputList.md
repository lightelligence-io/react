## Description

The input list is used to simplify the rendering of [Dropdown](#/Components/Dropdown) components for basic content.

```jsx
import { InputList, InputListItem } from '@lightelligence/react';
const [value, setValue] = React.useState('2');
const onChange = (value) => {
  setValue(value);
};
<InputList value={value} onChange={onChange}>
  <InputListItem value="1">Item 1</InputListItem>
  <InputListItem value="2">Item 2</InputListItem>
  <InputListItem value="3">Item 3</InputListItem>
</InputList>;
```
