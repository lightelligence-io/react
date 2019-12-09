
## Description

A dropdwon element.

The dropdown shows a max of 5 options to the user and can have a leading icon. If there are more than 5 options this is indicated with a scrollbar and the user is able to scroll inside the dropdown to see more options.

```jsx
import { InputListItem } from "@lightelligence/react";
const [value, setValue] = React.useState('2');
const onChange = (value) => {
  setValue(value);
};
<Dropdown label="Select an option" value={value} onChange={onChange}>
  <InputListItem value="1">Item 1</InputListItem>
  <InputListItem value="2">Item 2</InputListItem>
  <InputListItem value="3">Item 3</InputListItem>
</Dropdown>
```
