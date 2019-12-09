## Description

A Toggle can be used instead of Checkbox to toggle between 2 states.

```js
import { Toggle, Card, CardTable, CardTableItem, oltStyles } from '@lightelligence/react';
initialState = { checked : [
	true, true, true, true,
	false, false, false, false
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

const wrap = (toggle, dark) => (
	<Card className={dark && oltStyles.ThemeDark}
		color={dark ?"dark" : undefined}>
		<div style={{textAlign:'center'}} state={state}>
			{toggle}
		</div>
	</Card>
);

const rows = [
  {
	id: 'Active',
	light: wrap(<Toggle onChange={onChange(0)} checked={state.checked[0]}>Label</Toggle>),
	dark: wrap(<Toggle onChange={onChange(1)} checked={state.checked[1]}>Label</Toggle>, true),
  },
  {
	id: 'Active Disabled',
	light: wrap(<Toggle onChange={onChange(2)} checked={state.checked[2]} disabled>Label</Toggle>),
	dark: wrap(<Toggle onChange={onChange(3)} checked={state.checked[3]} disabled>Label</Toggle>, true),
  },
  {
	id: 'Inactive',
	light: wrap(<Toggle onChange={onChange(4)} checked={state.checked[4]}>Label</Toggle>),
	dark: wrap(<Toggle onChange={onChange(5)} checked={state.checked[5]}>Label</Toggle>, true),
  },
  {
	id: 'Inactive Disabled',
	light: wrap(<Toggle onChange={onChange(6)} checked={state.checked[6]} disabled>Label</Toggle>),
	dark: wrap(<Toggle onChange={onChange(7)} checked={state.checked[7]} disabled>Label</Toggle>, true),
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
import { Card, Toggle, oltStyles } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Card color="dark" className={oltStyles.ThemeDark}>
	<Toggle checked={state.checked} onChange={onChange}>Label</Toggle>
	<Toggle disabled checked={state.checked} onChange={onChange}>Label</Toggle>
</Card>
```

## Disabled

Use the `disabled` property to disable a toggle

```js
import { Toggle } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Toggle disabled checked={state.checked} onChange={onChange}>Label</Toggle>
```

## Reversed

Use the `reversed` property to reverse the order of the button and the label. This way the label is placed on the left.

```js
import { Card, Toggle } from '@lightelligence/react';
initialState = { checked: false };
const onChange = (checked) => { setState({ checked }); }

<Card>
	<Toggle reversed checked={state.checked} onChange={onChange}>Label</Toggle>
	<Toggle reversed disabled checked={state.checked} onChange={onChange}>Label</Toggle>
</Card>
```
