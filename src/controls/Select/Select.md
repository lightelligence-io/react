```js
import { Select } from '@lightelligence/react';
initialState = {
    options: [
        { label: 'Option 1', value: 'option_1' },
        { label: 'Option 2', value: 'option_2' },
        { label: 'Option 3', value: 'option_3' }
    ],
    value: 'option_1',
};
const onChange = (event) => { setState({ value: event.target.value }); };

<Select options={state.options} value={state.value} onChange={onChange} label="Select Label"/>
```

### Disabled
```js
import { Select } from '@lightelligence/react';
initialState = {
    options: [
        { label: 'Option 1', value: 'option_1' },
        { label: 'Option 2', value: 'option_2' },
        { label: 'Option 3', value: 'option_3' }
    ],
    value: 'option_1',
};
const onChange = (event) => { setState({ value: event.target.value }); };

<Select options={state.options} value={state.value} onChange={onChange} label="Select Label" disabled/>
```
