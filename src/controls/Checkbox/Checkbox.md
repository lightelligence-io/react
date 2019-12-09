## Description

A Checkbox implementation.

```js
import { Checkbox, Card, CardTable, CardTableItem, oltStyles } from '@lightelligence/react';
initialState = { checked : [
	true, true, true, true, true, true,
	false, false, false, false, false
] };
const onChange = (index) => () => {
	const newChecked = [...state.checked];
	console.log('onChange', index)
	newChecked[index] = !state.checked[index];
	setState({ checked: newChecked });
	console.log('onChange', newChecked[6], newChecked[7])
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
	light: wrap(<Checkbox onChange={onChange(0)} checked={state.checked[0]}>Label</Checkbox>),
	dark: wrap(<Checkbox onChange={onChange(1)} checked={state.checked[1]}>Label</Checkbox>, true),
  },
  {
	id: 'Active Disabled',
	light: wrap(<Checkbox onChange={onChange(2)} checked={state.checked[2]} disabled>Label</Checkbox>),
	dark: wrap(<Checkbox onChange={onChange(3)} checked={state.checked[3]} disabled>Label</Checkbox>, true),
  },
  {
	id: 'Indeterminate',
	light: wrap(<Checkbox onChange={onChange(4)} indeterminate checked={state.checked[4]}>Label</Checkbox>),
	dark: wrap(<Checkbox onChange={onChange(5)} indeterminate checked={state.checked[5]}>Label</Checkbox>, true),
  },
  {
	id: 'Indeterminate Disabled',
	light: wrap(<Checkbox onChange={onChange(6)} indeterminate checked={state.checked[6]} disabled>Label</Checkbox>),
	dark: wrap(<Checkbox onChange={onChange(7)} indeterminate checked={state.checked[7]} disabled>Label</Checkbox>, true),
  },
  {
	id: 'Inactive',
	light: wrap(<Checkbox onChange={onChange(8)} checked={state.checked[8]}>Label</Checkbox>),
	dark: wrap(<Checkbox onChange={onChange(9)} checked={state.checked[9]}>Label</Checkbox>, true),
  },
  {
	id: 'Inactive Disabled',
	light: wrap(<Checkbox onChange={onChange(10)} checked={state.checked[10]} disabled>Label</Checkbox>),
	dark: wrap(<Checkbox onChange={onChange(11)} checked={state.checked[11]} disabled>Label</Checkbox>, true),
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
import { Card, Checkbox, oltStyles } from '@lightelligence/react';
initialState = { checked: true };
const onChange = (checked) => { setState({ checked }); }

<Card color="dark" className={oltStyles.ThemeDark}>
	<Checkbox checked={state.checked} onChange={onChange}>Label</Checkbox>
	<Checkbox disabled checked={state.checked} onChange={onChange}>Label</Checkbox>
</Card>
```

## Indeterminate

```js
import { Card, Checkbox, oltStyles } from '@lightelligence/react';
initialState = { checked: {parent: false, one: false, two: false }, indeterminate: false };

const onChange = (element) => (isChecked) => {
	let {checked, indeterminate} = {...state}
	checked[element] = isChecked
	const {parent, one, two} = checked
	if (element==='parent') {
		checked['parent'] = isChecked
		checked['one'] = isChecked
		checked['two'] = isChecked
		indeterminate = false
	} else if (one && two) {
		checked['parent'] = true
		indeterminate = false
	} else if (one || two) {
		checked['parent'] = false
		indeterminate = true
	} else {
		indeterminate = false
	}

	setState({
		checked,
		indeterminate,
	})
}


<Card>
	<Checkbox checked={state.checked.parent} indeterminate={state.indeterminate} onChange={onChange('parent')}>Parent</Checkbox>
	<Checkbox checked={state.checked.one} onChange={onChange('one')} className={oltStyles.uMarginLeft2}>Child</Checkbox>
	<Checkbox checked={state.checked.two} onChange={onChange('two')} className={oltStyles.uMarginLeft2}>Child</Checkbox>
</Card>
```
