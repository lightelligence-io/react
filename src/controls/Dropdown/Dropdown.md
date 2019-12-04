
### Example

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
