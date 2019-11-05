A V2Radio Button implementation.

```js
import { V2Radio, Card, DataCards, DataCardsItem, oltStyles } from '@lightelligence/react';
initialState = { checked : [
	true, true, true, true, true, true,
	false, false, false, false, false
] };
const onChange = (index) => () => {
	const newChecked = [...state.checked];
	newChecked[index] = !state.checked[index];
	setState({ checked: newChecked });
}

const fields = [
  { key: 'id', label: '' },
  { key: 'light', label: 'Light Theme' },
  { key: 'dark', label: 'Dark Theme' },
];

const wrap = (component, dark) => (
	<Card className={dark && oltStyles.ThemeDark}
		color={dark ?"dark" : undefined}>
		<div style={{textAlign:'center'}} state={state}>
			{component}
		</div>
	</Card>
);

const rows = [
  {
	id: 'Active',
	light: wrap(<V2Radio onChange={onChange(0)} checked={state.checked[0]}>Label</V2Radio>),
	dark: wrap(<V2Radio onChange={onChange(1)} checked={state.checked[1]}>Label</V2Radio>, true),
  },
  {
	id: 'Active Disabled',
	light: wrap(<V2Radio onChange={onChange(2)} checked={state.checked[2]} disabled>Label</V2Radio>),
	dark: wrap(<V2Radio onChange={onChange(3)} checked={state.checked[3]} disabled>Label</V2Radio>, true),
  },
  {
	id: 'Inactive',
	light: wrap(<V2Radio onChange={onChange(4)} checked={state.checked[10]}>Label</V2Radio>),
	dark: wrap(<V2Radio onChange={onChange(5)} checked={state.checked[11]}>Label</V2Radio>, true),
  },
  {
	id: 'Inactive Disabled',
	light: wrap(<V2Radio onChange={onChange(6)} checked={state.checked[12]} disabled>Label</V2Radio>),
	dark: wrap(<V2Radio onChange={onChange(7)} checked={state.checked[13]} disabled>Label</V2Radio>, true),
  },
];

<DataCards
  fields={fields}
  rows={rows}
  align="center"
  layout="table"
>
  <DataCardsItem
    align="center"
    field="id"
  />
  <DataCardsItem halfSize align="center" field="light" />
  <DataCardsItem halfSize align="center" field="dark" />
</DataCards>;
```

## Theme dark

```js
import { Card, V2Radio, oltStyles } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Card color="dark" className={oltStyles.ThemeDark}>
	<V2Radio checked={state.checked} onChange={onChange}>Label</V2Radio>
	<V2Radio disabled checked={state.checked} onChange={onChange}>Label</V2Radio>
</Card>
```

## Radio Group

```js
import { RadioGroup, V2Radio } from '@lightelligence/react';

initialState = { value: 'a' };
const onChange = (value) => { setState({ value }); }

<RadioGroup name="radio-group" value={state.value} onChange={onChange}>
	<V2Radio value="a">Option A</V2Radio>
	<V2Radio value="b">Option B</V2Radio>
	<V2Radio value="c">Option C</V2Radio>
</RadioGroup>
```
