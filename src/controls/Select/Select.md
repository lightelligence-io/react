## Description

A select component. Use the [Dropdown](#/Controls/Dropdown) if you need a styled / flexible list.

```js
import { Select } from '@lightelligence/react';

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

<Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
/>;
```

Disabled

```js
import { Select } from '@lightelligence/react';

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

<Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  disabled
/>;
```

Required

```js
import { Select } from '@lightelligence/react';

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

<Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  required
/>;
```

Error

```js
import { Select } from '@lightelligence/react';

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

<Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  errorMessage="Not a valid input"
/>;
```

Hint

```js
import { Select } from '@lightelligence/react';

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

<Select
  label="Select an option"
  value={state.value}
  onChange={onChange}
  options={options}
  hint="This input is required"
/>;
```
