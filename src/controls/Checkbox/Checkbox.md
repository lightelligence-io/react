A simple checkbox

```js
import { Checkbox } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Checkbox checked={state.checked} onChange={onChange}>Label</Checkbox>
```

Indeterminate selected checkbox

```js
import { Checkbox } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Checkbox checked={state.checked} onChange={onChange} indeterminate>Label</Checkbox>
```