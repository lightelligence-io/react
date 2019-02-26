A simple checkbox

```js
import { Checkbox } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Checkbox checked={state.checked} onChange={onChange}>Label</Checkbox>
```
