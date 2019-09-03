A simple toggle

```js
import { Toggle } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Toggle checked={state.checked} onChange={onChange}>Label</Toggle>
```

Disabled

```js
import { Toggle } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Toggle disabled checked={state.checked} onChange={onChange}>Label</Toggle>
```

Reversed

```js
import { Card, Toggle } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Card>
	<Toggle reversed checked={state.checked} onChange={onChange}>Label</Toggle>
	<Toggle reversed disabled checked={state.checked} onChange={onChange}>Label</Toggle>
</Card>
```

Theme dark

```js
import { Card, Toggle, oltStyles } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Card color="dark" className={oltStyles.ThemeDark}>
	<Toggle checked={state.checked} onChange={onChange}>Label</Toggle>
	<Toggle disabled checked={state.checked} onChange={onChange}>Label</Toggle>
</Card>
```