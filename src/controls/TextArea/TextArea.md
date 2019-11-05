```js
import { TextArea } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea label="Enter your data" value={state.value} onChange={onChange} />;
```

Disabled

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  disabled
/>;
```

Required

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  required
/>;
```

Icon

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: '' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  icon="edit"
/>;
```

Maximum length (displayed when limit is almost reached)

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  maxLength={15}
/>;
```

Maximum length (always displayed)

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  maxLength={150}
  allwaysShowMaxLength
/>;
```

Error

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  errorMessage="Not a valid input"
/>;
```

Hint

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  hint="This input is required"
/>;
```

Autogrow

```js
import { TextArea } from '@lightelligence/react';
initialState = { value: 'Lorem ipsum' };
const onChange = (event) => {
  setState({ value: event.target.value });
};

<TextArea
  label="Enter your data"
  value={state.value}
  onChange={onChange}
  autogrow
/>;
```