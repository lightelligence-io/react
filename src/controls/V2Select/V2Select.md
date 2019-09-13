```js
import { V2Select } from '@lightelligence/react';

initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
>
  <option value="" hidden />
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</V2Select>;
```

Disabled

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: 'LoremIpsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  disabled
>
  <option value="" hidden />
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</V2Select>;
```

Required

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  required
>
  <option value="" hidden />
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</V2Select>;
```

Error

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: 'LoremIpsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  errorMessage="Not a valid input"
>
  <option value="" hidden />
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</V2Select>;
```

Hint

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: 'LoremIpsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  hint="This input is required"
>
  <option value="" hidden />
  <option value="LoremIpsum">Lorem Ipsum</option>
  <option value="DolorSitAmet">Dolor Sit Amet</option>
  <option value="EtVersus">Et Versus</option>
</V2Select>;
```
