```js
import { TextField } from '@lightelligence/react';
initialState = { value: ''};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField value={state.value} onChange={onChange}/>
```

### Label

```js
import { TextField } from '@lightelligence/react';
initialState = { value: ''};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange}/>
```


### As Textarea
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} textarea/>
```

### Disabled
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} disabled/>
```

### Readonly
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} readOnly/>
```

### Required with error-message
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} errorMessage="TextField is required" onChange={onChange} required/>
```

### With Info Text
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`${state.value.length}/200`} maxLength="200" onChange={onChange}/>
```

### With Icon
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} icon="edit" onChange={onChange}/>
```


### With Icon non-floating
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField floating={false} label="Label" value={state.value} icon="edit" onChange={onChange}/>
```


### Fullwidth
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} fullwidth/>
```

### Autogrow
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField autogrow label="Label" value={state.value} onChange={onChange} fullwidth/>
```


### Required with error-message and info-text
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`You entered ${state.value.length} characters`} errorMessage="TextField is required" onChange={onChange} required/>
```

### Required with error-message, info-text and max-length
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`${state.value.length}/20`} errorMessage="TextField is required" maxLength={20} onChange={onChange} required/>
```

### Required with info-text
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`You entered ${state.value.length} characters`} onChange={onChange} />
```

### Required with info-text
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField floating={false} label="Label" value={state.value} infoText={`You entered ${state.value.length} characters`}  onChange={onChange} />
```


### info-text and non-floating
```js
import { TextField } from '@lightelligence/react';
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField floating={false} label="Label" value={state.value} infoText={`You entered ${state.value.length} characters`} errorMessage="TextField is required" onChange={onChange} />
```
