
## Types

Buttons communicate actions that users can take. They are typically placed throughout the UI, in places like Dialogs, Modals, Forms, Cards, Toolbars...

Different types of buttons communicate different actions.

## Progressing Actions

The standard set of buttons can be used whenever an action is part of a process or opens up a variety of options to the user.

Contrasting levels of emphasis help the user to differentiate between important and less important actions. These levels can also be used to guide a user to a preferred outcome.

- **Primary**: Actions with a clear intention (Filled)
- **Secondary**: Other possible options (Outline)
- **Tertiary**: Less important actions (Text, Gray 500)
- **Tertiary / Action**: Recurring actions (Text, Primary)

### Light Theme

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

### Dark Theme

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

## Completing Actions

This set of buttons can be used to complete or terminate an action. The labels should give a clear indication of what the user can expect after clicking.

### Destructive Actions

Buttons for destructive actions are available with three levels of emphasis and two to three varations in style. Primary and Secondary Buttons are available with a leading decoration. Tertiary Buttons can also be used with trailing decoration, since they can be part of a Cell when used in Data Cards.

#### Levels of emphasis

- **Primary** (Filled): Critical actions without second warning (for example definitely deleting an item)
- **Secondary** (Outline): Destructive action as a possibility but not the only option available. <br>A warning in form of a **Modal** is necessary to prevent an unexpected outcome.
- **Tertiary** (Text, Error): Less important destructive actions. <br>A warning in form of a **Modal** is necessary to prevent an unexpected outcome.


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
    primary:         "-",
    secondary:       "-",
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
    primary:         "-",
    secondary:       "-",
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


### Confirmative Actions

Buttons for confirmative actions are available with three levels of emphasis and two varations in style. Primary and Secondary Buttons are available with a leading decoration.

#### Levels of emphasis
- **Primary** (Filled): A successful outcome of the action is guaranteed
- **Secondary** (Outline): Preferred positive actions with medium emphasis
- **Tertiary** (Text, Success): Less important actions

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
    primary:         "-",
    secondary:       "-",
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
    primary:         "-",
    secondary:       "-",
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

## Properties

### Disabled

```js
import { V2Button } from '@lightelligence/react';
<V2Button disabled>Disabled</V2Button>;
```

### Emphasis

The emphasis of this button. Valid values are:

- `primary` (default)
- `secondary`
- `tertiary`

```js
import { V2Button, FloatingList } from '@lightelligence/react';
<FloatingList>
  <V2Button emphasis="primary">Secondary</V2Button>
  <V2Button emphasis="secondary">Secondary</V2Button>
  <V2Button emphasis="tertiary">Tertiary</V2Button>
</FloatingList>
```

### Theme

The theme of this button. Valid values are:

- `light` (default)
- `dark`

```js
import { V2Button, FloatingList, Card } from '@lightelligence/react';
<>
<Card color="light">
  <FloatingList>
    <V2Button emphasis="primary" theme="light">Disabled</V2Button>
    <V2Button emphasis="secondary" theme="light">Disabled</V2Button>
    <V2Button emphasis="tertiary" theme="light">Disabled</V2Button>
  </FloatingList>
</Card>
<Card color="dark">
  <FloatingList>
    <V2Button emphasis="primary" theme="dark">Disabled</V2Button>
    <V2Button emphasis="secondary" theme="dark">Disabled</V2Button>
    <V2Button emphasis="tertiary" theme="dark">Disabled</V2Button>
  </FloatingList>
</Card>
</>
```

### Type

The type of this button. Valid values are:

- `default` (default)
- `confirmative`
- `destructive`
- `action` (only in combination with emphasis tertiary)

```js
import { V2Button, FloatingList } from '@lightelligence/react';
<FloatingList>
  <V2Button type="default">Confirmative</V2Button>
  <V2Button type="confirmative">Confirmative</V2Button>
  <V2Button type="destructive">Destructive</V2Button>
  <V2Button type="action" emphasis="tertiary">Action</V2Button>
</FloatingList>
```

### Icon left / right

With `iconLeft` and `iconRight` an icon can be placed next to the label.

```js
import { V2Button, FloatingList } from '@lightelligence/react';
<FloatingList>
  <V2Button iconLeft="add">Label</V2Button>
  <V2Button iconRight="add">Label</V2Button>
</FloatingList>
```

