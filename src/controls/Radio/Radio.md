## Description

A Radio Button implementation.

```js
import { Radio, Card, CardTable, CardTableItem, oltStyles } from '@lightelligence/react';
initialState = { checked : [
	true, true, true, true, true, true, false
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
	light: wrap(<Radio onChange={onChange(0)} checked={state.checked[0]}>Label</Radio>),
	dark: wrap(<Radio onChange={onChange(1)} checked={state.checked[1]}>Label</Radio>, true),
  },
  {
	id: 'Active Disabled',
	light: wrap(<Radio onChange={onChange(2)} checked={state.checked[2]} disabled>Label</Radio>),
	dark: wrap(<Radio onChange={onChange(3)} checked={state.checked[3]} disabled>Label</Radio>, true),
  },
  {
	id: 'Inactive',
	light: wrap(<Radio onChange={onChange(4)} checked={state.checked[4]}>Label</Radio>),
	dark: wrap(<Radio onChange={onChange(5)} checked={state.checked[5]}>Label</Radio>, true),
  },
  {
	id: 'Inactive Disabled',
	light: wrap(<Radio onChange={onChange(6)} checked={state.checked[6]} disabled>Label</Radio>),
	dark: wrap(<Radio onChange={onChange(7)} checked={state.checked[7]} disabled>Label</Radio>, true),
  },
];

<CardTable
  fields={fields}
  rows={rows}
  align="center"
  layout="table"
>
  <CardTableItem
    align="center"
    field="id"
  />
  <CardTableItem halfSize align="center" field="light" />
  <CardTableItem halfSize align="center" field="dark" />
</CardTable>;
```

## Theme dark

```js
import { Card, Radio, oltStyles } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Card color="dark" className={oltStyles.ThemeDark}>
	<Radio checked={state.checked} onChange={onChange}>Label</Radio>
	<Radio disabled checked={state.checked} onChange={onChange}>Label</Radio>
</Card>
```

## Radio Group

See [RadioGroup](#/Controls/RadioGroup)
