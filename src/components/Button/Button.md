
## Description

Buttons enable users to perform clear actions with a single click. There are three levels of emphasis: primary, secondary and tertiary. For labeling purposes please use the [Chip](#/Components/Chip) Component.

They are typically placed throughout the UI, in places like Dialogs, Modals, Forms, Cards, Toolbars...

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
import { CardTable, CardTableItem, Button } from '@lightelligence/react';

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
    primary:         <Button buttonType="default" emphasis="primary">Label</Button>,
    secondary:       <Button buttonType="default" emphasis="secondary">Label</Button>,
    tertiary:        <Button buttonType="default" emphasis="tertiary">Label</Button>,
    tertiary_action: <Button buttonType="action" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Decoration Left',
    primary:         <Button iconLeft="add-default" buttonType="default" emphasis="primary">Label</Button>,
    secondary:       <Button iconLeft="add-default" buttonType="default" emphasis="secondary">Label</Button>,
    tertiary:        <Button iconLeft="add-default" buttonType="default" emphasis="tertiary">Label</Button>,
    tertiary_action: <Button iconLeft="add-default" buttonType="action" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Decoration Right',
    primary:         <Button iconRight="add-default" buttonType="default" emphasis="primary">Label</Button>,
    secondary:       <Button iconRight="add-default" buttonType="default" emphasis="secondary">Label</Button>,
    tertiary:        <Button iconRight="add-default" buttonType="default" emphasis="tertiary">Label</Button>,
    tertiary_action: <Button iconRight="add-default" buttonType="action" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Disabled',
    primary:         <Button disabled buttonType="default" emphasis="primary">Label</Button>,
    secondary:       <Button disabled buttonType="default" emphasis="secondary">Label</Button>,
    tertiary:        <Button disabled buttonType="default" emphasis="tertiary">Label</Button>,
    tertiary_action: <Button disabled buttonType="action" emphasis="tertiary">Label</Button>,
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
  <CardTableItem halfSize align="center" field="primary" />
  <CardTableItem halfSize align="center" field="secondary" />
  <CardTableItem halfSize align="center" field="tertiary" />
  <CardTableItem halfSize align="center" field="tertiary_action" />
</CardTable>;
```

### Dark Theme

```js
import { Card, CardTable, CardTableItem, Button } from '@lightelligence/react';

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
    primary:         wrap(<Button theme="dark" buttonType="default" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" buttonType="default" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" buttonType="default" emphasis="tertiary">Label</Button>),
    tertiary_action: wrap(<Button theme="dark" buttonType="action" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Decoration Left',
    primary:         wrap(<Button theme="dark" iconLeft="add-default" buttonType="default" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" iconLeft="add-default" buttonType="default" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" iconLeft="add-default" buttonType="default" emphasis="tertiary">Label</Button>),
    tertiary_action: wrap(<Button theme="dark" iconLeft="add-default" buttonType="action" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Decoration Right',
    primary:         wrap(<Button theme="dark" iconRight="add-default" buttonType="default" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" iconRight="add-default" buttonType="default" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" iconRight="add-default" buttonType="default" emphasis="tertiary">Label</Button>),
    tertiary_action: wrap(<Button theme="dark" iconRight="add-default" buttonType="action" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Disabled',
    primary:         wrap(<Button theme="dark" disabled buttonType="default" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" disabled buttonType="default" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" disabled buttonType="default" emphasis="tertiary">Label</Button>),
    tertiary_action: wrap(<Button theme="dark" disabled buttonType="action" emphasis="tertiary">Label</Button>),
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
  <CardTableItem halfSize align="center" field="primary" />
  <CardTableItem halfSize align="center" field="secondary" />
  <CardTableItem halfSize align="center" field="tertiary" />
  <CardTableItem halfSize align="center" field="tertiary_action" />
</CardTable>;
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
import { CardTable, CardTableItem, Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
];

const rows = [
  {
    id: 'Default',
    primary:         <Button buttonType="destructive" emphasis="primary">Label</Button>,
    secondary:       <Button buttonType="destructive" emphasis="secondary">Label</Button>,
    tertiary:        <Button buttonType="destructive" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Decoration Left',
    primary:         <Button iconLeft="add-default" buttonType="destructive" emphasis="primary">Label</Button>,
    secondary:       <Button iconLeft="add-default" buttonType="destructive" emphasis="secondary">Label</Button>,
    tertiary:        <Button iconLeft="add-default" buttonType="destructive" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Decoration Right',
    primary:         "-",
    secondary:       "-",
    tertiary:        <Button iconRight="add-default" buttonType="destructive" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Disabled',
    primary:         <Button disabled buttonType="destructive" emphasis="primary">Label</Button>,
    secondary:       <Button disabled buttonType="destructive" emphasis="secondary">Label</Button>,
    tertiary:        <Button disabled buttonType="destructive" emphasis="tertiary">Label</Button>,
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
  <CardTableItem halfSize align="center" field="primary" />
  <CardTableItem halfSize align="center" field="secondary" />
  <CardTableItem halfSize align="center" field="tertiary" />
</CardTable>;
```

#### Dark Theme

```js
import { Card, CardTable, CardTableItem, Button } from '@lightelligence/react';

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
    primary:         wrap(<Button theme="dark" buttonType="destructive" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" buttonType="destructive" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" buttonType="destructive" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Decoration Left',
    primary:         wrap(<Button theme="dark" iconLeft="add-default" buttonType="destructive" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" iconLeft="add-default" buttonType="destructive" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" iconLeft="add-default" buttonType="destructive" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Decoration Right',
    primary:         "-",
    secondary:       "-",
    tertiary:        wrap(<Button theme="dark" iconRight="add-default" buttonType="destructive" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Disabled',
    primary:         wrap(<Button theme="dark" disabled buttonType="destructive" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" disabled buttonType="destructive" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" disabled buttonType="destructive" emphasis="tertiary">Label</Button>),
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
  <CardTableItem halfSize align="center" field="primary" />
  <CardTableItem halfSize align="center" field="secondary" />
  <CardTableItem halfSize align="center" field="tertiary" />
</CardTable>;
```


### Confirmative Actions

Buttons for confirmative actions are available with three levels of emphasis and two varations in style. Primary and Secondary Buttons are available with a leading decoration.

#### Levels of emphasis
- **Primary** (Filled): A successful outcome of the action is guaranteed
- **Secondary** (Outline): Preferred positive actions with medium emphasis
- **Tertiary** (Text, Success): Less important actions

#### Light Theme

```js
import { CardTable, CardTableItem, Button } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'tertiary', label: 'Tertiary' },
];

const rows = [
  {
    id: 'Default',
    primary:         <Button buttonType="confirmative" emphasis="primary">Label</Button>,
    secondary:       <Button buttonType="confirmative" emphasis="secondary">Label</Button>,
    tertiary:        <Button buttonType="confirmative" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Decoration Left',
    primary:         <Button iconLeft="add-default" buttonType="confirmative" emphasis="primary">Label</Button>,
    secondary:       <Button iconLeft="add-default" buttonType="confirmative" emphasis="secondary">Label</Button>,
    tertiary:        <Button iconLeft="add-default" buttonType="confirmative" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Decoration Right',
    primary:         "-",
    secondary:       "-",
    tertiary:        <Button iconRight="add-default" buttonType="confirmative" emphasis="tertiary">Label</Button>,
  },
  {
    id: 'Disabled',
    primary:         <Button disabled buttonType="confirmative" emphasis="primary">Label</Button>,
    secondary:       <Button disabled buttonType="confirmative" emphasis="secondary">Label</Button>,
    tertiary:        <Button disabled buttonType="confirmative" emphasis="tertiary">Label</Button>,
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
  <CardTableItem halfSize align="center" field="primary" />
  <CardTableItem halfSize align="center" field="secondary" />
  <CardTableItem halfSize align="center" field="tertiary" />
</CardTable>;
```

#### Dark Theme

```js
import { Card, CardTable, CardTableItem, Button } from '@lightelligence/react';

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
    primary:         wrap(<Button theme="dark" buttonType="confirmative" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" buttonType="confirmative" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" buttonType="confirmative" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Decoration Left',
    primary:         wrap(<Button theme="dark" iconLeft="add-default" buttonType="confirmative" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" iconLeft="add-default" buttonType="confirmative" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" iconLeft="add-default" buttonType="confirmative" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Decoration Right',
    primary:         "-",
    secondary:       "-",
    tertiary:        wrap(<Button theme="dark" iconRight="add-default" buttonType="confirmative" emphasis="tertiary">Label</Button>),
  },
  {
    id: 'Disabled',
    primary:         wrap(<Button theme="dark" disabled buttonType="confirmative" emphasis="primary">Label</Button>),
    secondary:       wrap(<Button theme="dark" disabled buttonType="confirmative" emphasis="secondary">Label</Button>),
    tertiary:        wrap(<Button theme="dark" disabled buttonType="confirmative" emphasis="tertiary">Label</Button>),
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
  <CardTableItem halfSize align="center" field="primary" />
  <CardTableItem halfSize align="center" field="secondary" />
  <CardTableItem halfSize align="center" field="tertiary" />
</CardTable>;
```

## Properties

### Disabled

```js
import { Button } from '@lightelligence/react';
<Button disabled>Disabled</Button>;
```

### Loading

```js
import { Button, FloatingList } from '@lightelligence/react';
initialState = { loading: false};
const load = () => {
  setState({ loading: true });
  setTimeout(()=>setState({ loading: false }), 2500)
};

<FloatingList>
  <Button onClick={load} loading={state.loading}>Spin Them</Button>
  <Button onClick={load} emphasis="secondary" loading={state.loading}>Spin Them</Button>
  <Button onClick={load} emphasis="tertiary" loading={state.loading}>Spin Them</Button>
</FloatingList>
```

### Emphasis

The emphasis of this button. Valid values are:

- `primary` (default)
- `secondary`
- `tertiary`

```js
import { Button, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Button emphasis="primary">Secondary</Button>
  <Button emphasis="secondary">Secondary</Button>
  <Button emphasis="tertiary">Tertiary</Button>
</FloatingList>
```

### Theme

The theme of this button. Valid values are:

- `light` (default)
- `dark`

```js
import { Button, FloatingList, Card } from '@lightelligence/react';
<>
<Card color="light">
  <FloatingList>
    <Button emphasis="primary" theme="light">Disabled</Button>
    <Button emphasis="secondary" theme="light">Disabled</Button>
    <Button emphasis="tertiary" theme="light">Disabled</Button>
  </FloatingList>
</Card>
<Card color="dark">
  <FloatingList>
    <Button emphasis="primary" theme="dark">Disabled</Button>
    <Button emphasis="secondary" theme="dark">Disabled</Button>
    <Button emphasis="tertiary" theme="dark">Disabled</Button>
  </FloatingList>
</Card>
</>
```

### Button Type

The `buttonType` of this button. Valid values are:

- `default` (default)
- `confirmative`
- `destructive`
- `action` (only in combination with emphasis tertiary)

```js
import { Button, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Button buttonType="default">Default</Button>
  <Button buttonType="confirmative">Confirmative</Button>
  <Button buttonType="destructive">Destructive</Button>
  <Button buttonType="action" emphasis="tertiary">Action</Button>
</FloatingList>
```

### Icon left / right

With `iconLeft` and `iconRight` an icon can be placed next to the label.

```js
import { Button, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Button iconLeft="add-default">Label</Button>
  <Button iconRight="add-default">Label</Button>
</FloatingList>
```
