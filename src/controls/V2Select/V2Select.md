```js
import { V2Select } from '@lightelligence/react';

initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

const options = [
  { value: '', label: '', hidden: true },
  { value: 'LoremIpsum', label: 'Lorem Ipsum' },
  { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
  { value: 'EtVersus', label: 'Et Versus' },
];

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
/>;
```

Disabled

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: 'LoremIpsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

const options = [
  { value: '', label: '', hidden: true },
  { value: 'LoremIpsum', label: 'Lorem Ipsum' },
  { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
  { value: 'EtVersus', label: 'Et Versus' },
];

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  disabled
/>;
```

Required

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

const options = [
  { value: '', label: '', hidden: true },
  { value: 'LoremIpsum', label: 'Lorem Ipsum' },
  { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
  { value: 'EtVersus', label: 'Et Versus' },
];

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  required
/>;
```

Error

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: 'LoremIpsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

const options = [
  { value: '', label: '', hidden: true },
  { value: 'LoremIpsum', label: 'Lorem Ipsum' },
  { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
  { value: 'EtVersus', label: 'Et Versus' },
];

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  errorMessage="Not a valid input"
/>;
```

Hint

```js
import { V2Select } from '@lightelligence/react';

initialState = { value: 'LoremIpsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

const options = [
  { value: '', label: '', hidden: true },
  { value: 'LoremIpsum', label: 'Lorem Ipsum' },
  { value: 'DolorSitAmet', label: 'Dolor Sit Amet' },
  { value: 'EtVersus', label: 'Et Versus' },
];

<V2Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  hint="This input is required"
/>;
```
