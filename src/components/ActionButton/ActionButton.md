The Action Button is used to trigger actions like editing, etc.
It is responsive and on mobile devices only the icon is shown (unless you add the fixed property to always show the label)


```js
import { DataCards, DataCardsItem, ActionButton } from '@lightelligence/react';

const fields = [
  { key: 'id', label: '' },
  { key: 'default', label: 'Default' },
  { key: 'primary', label: 'Primary' },
  { key: 'destructive', label: 'Destructive' },
  { key: 'confirmative', label: 'Confirmative' },
];

const rows = [
  {
    id: 'Default',
    default:       <ActionButton buttonType="default" iconLeft="edit" />,
    primary:       <ActionButton buttonType="primary"  iconLeft="add-outline" />,
    destructive:   <ActionButton buttonType="destructive"  iconLeft="remove-outline" />,
    confirmative:  <ActionButton buttonType="confirmative"  iconLeft="refresh" />,
  },
  {
    id: 'Icon Left',
    default:       <ActionButton iconLeft="edit" buttonType="default" label="Label" />,
    primary:       <ActionButton iconLeft="add-outline" buttonType="primary" label="Label" />,
    destructive:   <ActionButton iconLeft="remove-outline" buttonType="destructive" label="Label" />,
    confirmative:  <ActionButton iconLeft="refresh" buttonType="confirmative" label="Label" />,
  },
  {
    id: 'Fixed Label',
    default:       <ActionButton iconLeft="edit" buttonType="default" fixed label="Label" />,
    primary:       <ActionButton iconLeft="add-outline" buttonType="primary" fixed label="Label" />,
    destructive:   <ActionButton iconLeft="remove-outline" buttonType="destructive" fixed label="Label" />,
    confirmative:  <ActionButton iconLeft="refresh" buttonType="confirmative" fixed label="Label" />,
  },
  {
    id: 'Standalone',
    default:       <ActionButton iconLeft="edit" buttonType="default" standalone label="Label" />,
    primary:       <ActionButton iconLeft="add-outline" buttonType="primary" standalone label="Label" />,
    destructive:   <ActionButton iconLeft="remove-outline" buttonType="destructive" standalone label="Label" />,
    confirmative:  <ActionButton iconLeft="refresh" buttonType="confirmative" standalone label="Label" />,
  },
  {
    id: 'Standalone with Base',
    default:       <ActionButton iconLeft="edit" buttonType="default" standalone base label="Label" />,
    primary:       <ActionButton iconLeft="add-outline" buttonType="primary" standalone base label="Label" />,
    destructive:   <ActionButton iconLeft="remove-outline" buttonType="destructive" standalone base label="Label" />,
    confirmative:  <ActionButton iconLeft="refresh" buttonType="confirmative" standalone base label="Label" />,
  },
  {
    id: 'Icon Right',
    default:       <ActionButton iconRight="edit" buttonType="default" label="Label" />,
    primary:       <ActionButton iconRight="add-outline" buttonType="primary" label="Label" />,
    destructive:   <ActionButton iconRight="remove-outline" buttonType="destructive" label="Label" />,
    confirmative:  <ActionButton iconRight="refresh" buttonType="confirmative" label="Label" />,
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
  <DataCardsItem halfSize align="center" field="default" />
  <DataCardsItem halfSize align="center" field="primary" />
  <DataCardsItem halfSize align="center" field="destructive" />
  <DataCardsItem halfSize align="center" field="confirmative" />
</DataCards>;
```

## Properties


### Button Type

Use buttonType to set the type (and color) of the button.
- **default**: Default color
- **primary**: Primary color for actions
- **destructive**: Destructive actions, shown in red color
- **constructive**: Confirmative actions, shown in green color

```js
import { ActionButton, FloatingList } from '@lightelligence/react';
<FloatingList>
  <ActionButton buttonType="default" iconLeft="edit" label="Default" />
  <ActionButton buttonType="primary" iconLeft="edit" label="Primary" />
  <ActionButton buttonType="confirmative" iconLeft="edit" label="Confirmative" />
  <ActionButton buttonType="destructive" iconLeft="edit" label="Destructive" />
</FloatingList>
```

### Icon left / right

With `iconLeft` and `iconRight` an icon can be placed next to the label.
With `iconRight` the element should be right aligned.

```js
import { ActionButton, FloatingList } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';

<>
<FloatingList>
  <ActionButton iconLeft="add-default" label="Label" />
</FloatingList>
<FloatingList className={olt.uTextAlignRight}>
  <ActionButton iconRight="add-default" label="Label" />
</FloatingList>
</>
```

### Modifiers

Use render props to change the behaviour and layout of the button.
- **fixed**: ensures that the label is always shown
- **standalone**: hides the label
- **base**: always shows the base

```js
import { ActionButton } from '@lightelligence/react';

<>
<p>
  Fixed:
  <ActionButton iconLeft="add-default" label="Fixed Label" fixed />
</p>
<p>
  Standalone:
  <ActionButton iconLeft="add-default" label="Standalone" standalone />
</p>
<p>
  Base:
  <ActionButton iconRight="add-default" label="Base" base />
</p>
<p>
  Standalone Base:
  <ActionButton iconRight="add-default" label="Standalone Base" standalone base />
</p>
</>
```

### Disabled

The button can be disabled using the `disabled` prop. This overrides any colors being set through other modifiers.

```js
import { ActionButton, FloatingList } from '@lightelligence/react';

<>
<p>
  Disabled:
  <ActionButton iconLeft="add-default" label="Disabled" disabled />
</p>
<p>
  Standalone Disabled:
  <ActionButton iconLeft="add-default" label="Standalone disabled" standalone disabled />
</p>
<p>
  Base Disabled:
  <ActionButton iconLeft="add-default" label="Base disabled" base disabled />
</p>
<p>
  Standalone Base Disabled:
  <ActionButton iconLeft="add-default" label="Standalone Base Disabled" standalone base disabled />
</p>
</>
```

### Proximity

The button can be used within an element using the proximity class to highlight contained Action Elements.

```js
import { ActionButton } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';

<>
<div className={olt.ActionButtonProximityArea} style={{padding: '50px', border: '1px dotted lightgray'}}>
  <ActionButton iconLeft="add-default" buttonType="primary" label="With Proximity" />
</div>
</>
```

### Disabled

The button can be disabled using the `disabled` prop. This overrides any colors being set through other modifiers.

```js
import { ActionButton, FloatingList } from '@lightelligence/react';

<>
<p>
  Disabled:
  <ActionButton iconLeft="action-add-default" label="Disabled" disabled />
</p>
<p>
  Standalone Disabled:
  <ActionButton iconLeft="action-add-default" label="Standalone disabled" standalone disabled />
</p>
<p>
  Base Disabled:
  <ActionButton iconLeft="action-add-default" label="Base disabled" base disabled />
</p>
<p>
  Standalone Base Disabled:
  <ActionButton iconLeft="action-add-default" label="Standalone Base Disabled" standalone base disabled />
</p>
</>
```

### Proximity

The button can be used within an element using the proximity class to highlight contained Action Elements.

```js
import { ActionButton } from '@lightelligence/react';
import * as olt from '@lightelligence/styles';

<>
<div className={olt.ActionButtonProximityArea} style={{padding: '50px', border: '1px dotted lightgray'}}>
  <ActionButton iconLeft="action-add-default" buttonType="primary" label="With Proximity" />
</div>
</>
```