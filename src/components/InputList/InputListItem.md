
### Example

```jsx 
import { InputList, InputListItem } from '@lightelligence/react';
const onClick = (value) => {
  console.log(`clicked ${value}`);
};
<InputList onChange={onChange}>
  <InputListItem value="1">Item 1</InputListItem>
  <InputListItem value="2">Item 2</InputListItem>
  <InputListItem value="3">Item 3</InputListItem>
</InputList>;
```
