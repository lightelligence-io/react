Radio

```js
import { Radio } from '@lightelligence/react';

initialState = { selected: false };
const onChange = () => { setState({ selected: !state.selected }); }

<Radio
  onChange={onChange}
  selected={state.selected}
  value="foo"
>
  Label
</Radio>
```
