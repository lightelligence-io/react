```js
import { V2Button } from '@lightelligence/react';
<V2Button>Button</V2Button>;
```

### Disabled

```js
import { V2Button } from '@lightelligence/react';
<V2Button disabled>Disabled</V2Button>;
```

### Default Buttons

#### Light Theme

```js
import { DataCards, DataCardsItem, V2Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
  { key: 'tertiary_action', label: 'Tertiary Action' },
];

const rows = [
  {
    id: 'Default',
    primary:         <V2Button type="default" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button type="default" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button type="default" emphasis="tertiary">Label</V2Button>,
    tertiary_action: <V2Button type="action" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Decoration Left',
    primary:         <V2Button iconLeft="add" type="default" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button iconLeft="add" type="default" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button iconLeft="add" type="default" emphasis="tertiary">Label</V2Button>,
    tertiary_action: <V2Button iconLeft="add" type="action" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Decoration Right',
    primary:         <V2Button iconRight="add" type="default" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button iconRight="add" type="default" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button iconRight="add" type="default" emphasis="tertiary">Label</V2Button>,
    tertiary_action: <V2Button iconRight="add" type="action" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Disabled',
    primary:         <V2Button disabled type="default" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button disabled type="default" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button disabled type="default" emphasis="tertiary">Label</V2Button>,
    tertiary_action: <V2Button disabled type="action" emphasis="tertiary">Label</V2Button>,
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
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="secondary" />
  <DataCardsItem halfSize align="center" field="tertiary" />
  <DataCardsItem halfSize align="center" field="tertiary_action" />
</DataCards>;
```

#### Dark Theme

```js
import { Card, DataCards, DataCardsItem, V2Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
  { key: 'tertiary_action', label: 'Tertiary' },
];
const wrap = (button) => <Card color="dark"><div style={{textAlign:'center'}}>{button}</div></Card>;
const rows = [
  {
    id: 'Default',
    primary:         wrap(<V2Button theme="dark" type="default" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" type="default" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" type="default" emphasis="tertiary">Label</V2Button>),
    tertiary_action: wrap(<V2Button theme="dark" type="action" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Decoration Left',
    primary:         wrap(<V2Button theme="dark" iconLeft="add" type="default" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" iconLeft="add" type="default" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" iconLeft="add" type="default" emphasis="tertiary">Label</V2Button>),
    tertiary_action: wrap(<V2Button theme="dark" iconLeft="add" type="action" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Decoration Right',
    primary:         wrap(<V2Button theme="dark" iconRight="add" type="default" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" iconRight="add" type="default" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" iconRight="add" type="default" emphasis="tertiary">Label</V2Button>),
    tertiary_action: wrap(<V2Button theme="dark" iconRight="add" type="action" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Disabled',
    primary:         wrap(<V2Button theme="dark" disabled type="default" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" disabled type="default" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" disabled type="default" emphasis="tertiary">Label</V2Button>),
    tertiary_action: wrap(<V2Button theme="dark" disabled type="action" emphasis="tertiary">Label</V2Button>),
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
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="secondary" />
  <DataCardsItem halfSize align="center" field="tertiary" />
  <DataCardsItem halfSize align="center" field="tertiary_action" />
</DataCards>;
```

### Destructive Buttons

#### Light Theme

```js
import { DataCards, DataCardsItem, V2Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
];

const rows = [
  {
    id: 'Default',
    primary:         <V2Button type="destructive" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button type="destructive" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button type="destructive" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Decoration Left',
    primary:         <V2Button iconLeft="add" type="destructive" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button iconLeft="add" type="destructive" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button iconLeft="add" type="destructive" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Decoration Right',
    primary:         null,
    secondary:       null,
    tertiary:        <V2Button iconRight="add" type="destructive" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Disabled',
    primary:         <V2Button disabled type="destructive" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button disabled type="destructive" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button disabled type="destructive" emphasis="tertiary">Label</V2Button>,
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
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="secondary" />
  <DataCardsItem halfSize align="center" field="tertiary" />
</DataCards>;
```

#### Dark Theme

```js
import { Card, DataCards, DataCardsItem, V2Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
];
const wrap = (button) => <Card color="dark"><div style={{textAlign:'center'}}>{button}</div></Card>;
const rows = [
  {
    id: 'Default',
    primary:         wrap(<V2Button theme="dark" type="destructive" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" type="destructive" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" type="destructive" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Decoration Left',
    primary:         wrap(<V2Button theme="dark" iconLeft="add" type="destructive" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" iconLeft="add" type="destructive" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" iconLeft="add" type="destructive" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Decoration Right',
    primary:         null,
    secondary:       null,
    tertiary:        wrap(<V2Button theme="dark" iconRight="add" type="destructive" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Disabled',
    primary:         wrap(<V2Button theme="dark" disabled type="destructive" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" disabled type="destructive" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" disabled type="destructive" emphasis="tertiary">Label</V2Button>),
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
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="secondary" />
  <DataCardsItem halfSize align="center" field="tertiary" />
</DataCards>;
```

### Confirmative Buttons

#### Light Theme

```js
import { DataCards, DataCardsItem, V2Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
];

const rows = [
  {
    id: 'Default',
    primary:         <V2Button type="confirmative" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button type="confirmative" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button type="confirmative" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Decoration Left',
    primary:         <V2Button iconLeft="add" type="confirmative" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button iconLeft="add" type="confirmative" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button iconLeft="add" type="confirmative" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Decoration Right',
    primary:         null,
    secondary:       null,
    tertiary:        <V2Button iconRight="add" type="confirmative" emphasis="tertiary">Label</V2Button>,
  },
  {
    id: 'Disabled',
    primary:         <V2Button disabled type="confirmative" emphasis="primary">Label</V2Button>,
    secondary:       <V2Button disabled type="confirmative" emphasis="secondary">Label</V2Button>,
    tertiary:        <V2Button disabled type="confirmative" emphasis="tertiary">Label</V2Button>,
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
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="secondary" />
  <DataCardsItem halfSize align="center" field="tertiary" />
</DataCards>;
```

#### Dark Theme

```js
import { Card, DataCards, DataCardsItem, V2Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
];
const wrap = (button) => <Card color="dark"><div style={{textAlign:'center'}}>{button}</div></Card>;
const rows = [
  {
    id: 'Default',
    primary:         wrap(<V2Button theme="dark" type="confirmative" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" type="confirmative" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" type="confirmative" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Decoration Left',
    primary:         wrap(<V2Button theme="dark" iconLeft="add" type="confirmative" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" iconLeft="add" type="confirmative" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" iconLeft="add" type="confirmative" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Decoration Right',
    primary:         null,
    secondary:       null,
    tertiary:        wrap(<V2Button theme="dark" iconRight="add" type="confirmative" emphasis="tertiary">Label</V2Button>),
  },
  {
    id: 'Disabled',
    primary:         wrap(<V2Button theme="dark" disabled type="confirmative" emphasis="primary">Label</V2Button>),
    secondary:       wrap(<V2Button theme="dark" disabled type="confirmative" emphasis="secondary">Label</V2Button>),
    tertiary:        wrap(<V2Button theme="dark" disabled type="confirmative" emphasis="tertiary">Label</V2Button>),
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
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="secondary" />
  <DataCardsItem halfSize align="center" field="tertiary" />
</DataCards>;
```


```js
import { DataCards, Headline, FloatingList, Card, V2Button } from '@lightelligence/react';
<Card>
  <Headline>Emphasis: primary</Headline>
  <FloatingList>
    <V2Button theme="light" type='default'>Type Default</V2Button>
    <V2Button theme="light" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="light" type='destructive'>Type Destructive</V2Button>
  </FloatingList>
  <br />
  <Headline size="6">with icon to the left</Headline>
  <FloatingList>
    <V2Button theme="light" iconLeft="add" type='default'>Type Default</V2Button>
    <V2Button theme="light" iconLeft="add" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="light" iconLeft="add" type='destructive'>Type Destructive</V2Button>
  </FloatingList>
  <br />
  <Headline size="6">with icon to the right</Headline>
  <FloatingList>
    <V2Button theme="light" iconRight="add" type='default'>Type Default</V2Button>
    <V2Button theme="light" iconRight="add" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="light" iconRight="add" type='destructive'>Type Destructive</V2Button>
  </FloatingList>
  <br />
  <Headline>Emphasis: secondary</Headline>
  <FloatingList>
    <V2Button theme="light" emphasis="secondary" type='default'>Type Default</V2Button>
    <V2Button theme="light" emphasis="secondary" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="light" emphasis="secondary" type='destructive'>Type Destructive</V2Button>
  </FloatingList>
  <br />
  <Headline>Emphasis: tertiary</Headline>
  <FloatingList>
    <V2Button theme="light" emphasis="tertiary" type='default'>Type Default</V2Button>
    <V2Button theme="light" emphasis="tertiary" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="light" emphasis="tertiary" type='destructive'>Type Destructive</V2Button>
    <V2Button theme="light" emphasis="tertiary" type='action'>Type Action</V2Button>
  </FloatingList>
</Card>
```

#### Dark Theme

```js
import { Headline, FloatingList, Card, V2Button } from '@lightelligence/react';
<Card color="dark">
  <Headline>Primary emphasis</Headline>
  <FloatingList>
    <V2Button theme="dark" type='default'>Type Default</V2Button>
    <V2Button theme="dark" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="dark" type='destructive'>Type Destructive</V2Button>
  </FloatingList>
  <br />
  <Headline>Secondary emphasis</Headline>
  <FloatingList>
    <V2Button theme="dark" emphasis="secondary" type='default'>Type Default</V2Button>
    <V2Button theme="dark" emphasis="secondary" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="dark" emphasis="secondary" type='destructive'>Type Destructive</V2Button>
  </FloatingList>
  <br />
  <Headline>Emphasis: tertiary</Headline>
  <FloatingList>
    <V2Button theme="dark" emphasis="tertiary" type='default'>Type Default</V2Button>
    <V2Button theme="dark" emphasis="tertiary" type='confirmative'>Type Confirmative</V2Button>
    <V2Button theme="dark" emphasis="tertiary" type='destructive'>Type Destructive</V2Button>
    <V2Button theme="dark" emphasis="tertiary" type='action'>Type Action</V2Button>
  </FloatingList>
</Card>
```

