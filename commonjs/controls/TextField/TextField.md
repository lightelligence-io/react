```js
initialState = { value: ''};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField value={state.value} onChange={onChange}/>
```

### Label

```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange}/>
```

### Label

```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange}/>
```


### As Textarea
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} textarea/>
```

### Disabled
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} disabled/>
```

### Readonly
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} readOnly/>
```

### Required with error-message
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} errorMessage="TextField is required" onChange={onChange} required/>
```

### With Info Text
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`${state.value.length}/200`} maxLength="200" onChange={onChange}/>
```

### With Icon
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} icon="edit" onChange={onChange}/>
```


### With Icon non-floating
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField floating={false} label="Label" value={state.value} icon="edit" onChange={onChange}/>
```


### Fullwidth
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} onChange={onChange} fullwidth/>
```

### Autogrow
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField autogrow label="Label" value={state.value} onChange={onChange} fullwidth/>
```


### Required with error-message and info-text
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`${state.value.length}/200`} errorMessage="TextField is required" onChange={onChange} required/>
```

### Required with info-text
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField label="Label" value={state.value} infoText={`${state.value.length}/200`} onChange={onChange} />
```

### Required with info-text
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField floating={false} label="Label" value={state.value} infoText={`${state.value.length}/200`}  onChange={onChange} />
```


### info-text and non-floating
```js
initialState = { value: 'Value'};
const onChange = (event) => {
    setState({ value: event.target.value });
};
<TextField floating={false} label="Label" value={state.value} infoText={`${state.value.length}/200`} errorMessage="TextField is required" onChange={onChange} />
```
