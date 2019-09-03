```js
import { V2Label } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';

initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Label
  defaultValue="Lorem ipsum"
  icon="edit"
  label="Enter your data"
  value={state.value}
  maxLength={150}
>
  {(displayValue) => (
    <input
      className={olt.V2Input}
      value={displayValue}
      onChange={onChange}
    />
  )}
</V2Label>
```
