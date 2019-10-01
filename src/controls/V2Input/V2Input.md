```js
import { V2Input } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input label="Enter your data" value={state.value} onChange={onChange} />;
```

Disabled

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  disabled
/>;
```

Required

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  required
/>;
```

Icon

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  icon="edit"
/>;
```

Maximum length (displayed when limit is almost reached)

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  maxLength={15}
/>;
```

Maximum length (always displayed)

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  maxLength={150}
  allwaysShowMaxLength
/>;
```

Error

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  errorMessage="Not a valid input"
/>;
```

Hint

```js
import { V2Input } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<V2Input
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  hint="This input is required"
/>;
```