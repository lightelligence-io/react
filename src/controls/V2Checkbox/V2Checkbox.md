A V2Checkbox can be used instead of Checkbox to toggle between 2 states.

```js
import { V2Checkbox, Card, DataCards, DataCardsItem, oltStyles } from '@lightelligence/react';
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
	light: wrap(<V2Checkbox onChange={onChange(0)} checked={state.checked[0]}>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(1)} checked={state.checked[1]}>Label</V2Checkbox>, true),
  },
  {
	id: 'Active Disabled',
	light: wrap(<V2Checkbox onChange={onChange(2)} checked={state.checked[2]} disabled>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(3)} checked={state.checked[3]} disabled>Label</V2Checkbox>, true),
  },
	{
	id: 'Active Indetermined',
	light: wrap(<V2Checkbox onChange={onChange(4)} indetermined checked={state.checked[4]}>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(5)} indetermined checked={state.checked[5]}>Label</V2Checkbox>, true),
	},
  {
	id: 'Indetermined',
	light: wrap(<V2Checkbox onChange={onChange(4)} indetermined checked={state.checked[6]}>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(5)} indetermined checked={state.checked[7]}>Label</V2Checkbox>, true),
  },
  {
	id: 'Indetermined Disabled',
	light: wrap(<V2Checkbox onChange={onChange(4)} indetermined checked={state.checked[8]} disabled>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(5)} indetermined checked={state.checked[9]} disabled>Label</V2Checkbox>, true),
  },
  {
	id: 'Inactive',
	light: wrap(<V2Checkbox onChange={onChange(4)} checked={state.checked[10]}>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(5)} checked={state.checked[11]}>Label</V2Checkbox>, true),
  },
  {
	id: 'Inactive Disabled',
	light: wrap(<V2Checkbox onChange={onChange(6)} checked={state.checked[12]} disabled>Label</V2Checkbox>),
	dark: wrap(<V2Checkbox onChange={onChange(7)} checked={state.checked[13]} disabled>Label</V2Checkbox>, true),
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
import { Card, V2Checkbox, oltStyles } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Card color="dark" className={oltStyles.ThemeDark}>
	<V2Checkbox checked={state.checked} onChange={onChange}>Label</V2Checkbox>
	<V2Checkbox disabled checked={state.checked} onChange={onChange}>Label</V2Checkbox>
</Card>
```
