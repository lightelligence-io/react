## Description

An input component

```js
import { Input } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input label="Enter your data" value={state.value} onChange={onChange} />;
```

Disabled

```js
import { Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  disabled
/>;
```

Required

```js
import { Input } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  required
/>;
```

Icon

```js
import { Input } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};
const onIconClick = () => {
  setState({ value: '' });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  onIconClick={onIconClick}
  icon="edit"
/>;
```

Maximum length (displayed when limit is almost reached)

```js
import { Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  maxLength={15}
/>;
```

Maximum length (always displayed)

```js
import { Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  maxLength={150}
  allwaysShowMaxLength
/>;
```

Error

```js
import { Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  errorMessage="Not a valid input"
/>;
```

Hint

```js
import { Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  hint="This input is required"
/>;
```