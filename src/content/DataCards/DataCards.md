## Description

*DataCards* are a high level component on top of the low level *BasicDataCards* component.

This example shows how to render DataCards based on data sources.

```js
import { DataCards, DataCardsItem } from '@lightelligence/react';

const fields = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'birthday', label: 'Birthday' },
];

const rows = [
  {
    id: '1',
    name: 'Peter',
    age: 25,
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Fleming',
    age: 30,
    birthday: '20.01.1990',
  },
];

<DataCards
  fields={fields}
  rows={rows}
  onClick={(row) => alert(`row clicked\n${JSON.stringify(row, null, '  ')}`)}
  layout="table"
>
  <DataCardsItem
    field="name"
    render={({ row }) => <div>Hello {row.name}</div>}
  />
  <DataCardsItem field="age" />
  <DataCardsItem field="birthday" />
</DataCards>;
```

## Buttons inside of Data Cards

The following example shows the usage of Buttons inside of cards while still supporting
card clicks itself.

```js
import { DataCards, DataCardsItem, Button } from '@lightelligence/react';


const fields = [
  { key: 'name', label: 'Name' },
  { key: 'birthday', label: 'Birthday' },
  { key: 'removeButton', label: '' },
];

const rows = [
  {
    id: '1',
    name: 'Aron',
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Karli',
    birthday: '20.01.1990',
  },
];

<DataCards
  fields={fields}
  rows={rows}
  onClick={(row) => alert(`row clicked\n${JSON.stringify(row, null, '  ')}`)}
  layout="table"
>
  
  <DataCardsItem
    field="name"
    render={({ row }) => <div>Hello {row.name}</div>}
  />
  <DataCardsItem field="birthday" />
  <DataCardsItem
    field="-"
    render={({ row }) => (
      <Button onClick={(e) => {
        // prevent row click 
        e.stopPropagation();
        alert(`remove user with id ${row.id}`);
      }}>
        Remove User
      </Button>
    )}
  />
</DataCards>;
```

## Property forwarding

Every item of the `fields` array can have additional fields. Those are forwarded as `props` to the underlying `BasicDataCardsHeadItem` component.

Properties on `DataCardsItem` components are forwarded to the underlying `BasicDataCardsCardItem` component in the same way. This is equally valid for `DataCards` components which forward to the `BasicDataCards` component. 

The following usages of `align` and `layout="table"` are examples for this behaviour.

```js
import { DataCards, DataCardsItem, Button } from '@lightelligence/react';

const fields = [
  { key: 'name', label: 'Name' },
  { key: 'birthday', label: 'Birthday', align: 'center' },
  { key: 'removeButton', label: '', align: 'right' },
];

const rows = [
  {
    id: '1',
    name: 'Aron',
    birthday: '20.01.1995',
  },
  {
    id: '2',
    name: 'Karli',
    birthday: '20.01.1990',
  },
];

<DataCards
  fields={fields}
  rows={rows}
  onClick={(row) => alert(`row clicked\n${JSON.stringify(row, null, '  ')}`)}
  layout="table"
>
  
  <DataCardsItem
    field="name"
    align="left"
    render={({ row }) => <div>Hello {row.name}</div>}
  />
  <DataCardsItem align="center" field="birthday" />
  <DataCardsItem
    field="-"
    align="right"
    render={({ row }) => (
      <Button onClick={(e) => {
        // prevent row click 
        e.stopPropagation();
        alert(`remove user with id ${row.id}`);
      }}>
        Remove User
      </Button>
    )}
  />
</DataCards>;
```