A simple checkbox

```js
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Checkbox checked={state.checked} onChange={onChange}>Label</Checkbox>
```
