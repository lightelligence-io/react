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
    default:       <ActionButton buttonType="default" iconLeft="action-edit" />,
    primary:       <ActionButton buttonType="primary"  iconLeft="action-add-circle" />,
    destructive:   <ActionButton buttonType="destructive"  iconLeft="action-remove-circle" />,
    confirmative:  <ActionButton buttonType="confirmative"  iconLeft="action-refresh" />,
  },
  {
    id: 'Icon Left',
    default:       <ActionButton iconLeft="action-edit" buttonType="default" label="Label" />,
    primary:       <ActionButton iconLeft="action-add-circle" buttonType="primary" label="Label" />,
    destructive:   <ActionButton iconLeft="action-remove-circle" buttonType="destructive" label="Label" />,
    confirmative:  <ActionButton iconLeft="action-refresh" buttonType="confirmative" label="Label" />,
  },
  {
    id: 'Fixed Label',
    default:       <ActionButton iconLeft="action-edit" buttonType="default" fixed label="Label" />,
    primary:       <ActionButton iconLeft="action-add-circle" buttonType="primary" fixed label="Label" />,
    destructive:   <ActionButton iconLeft="action-remove-circle" buttonType="destructive" fixed label="Label" />,
    confirmative:  <ActionButton iconLeft="action-refresh" buttonType="confirmative" fixed label="Label" />,
  },
  {
    id: 'Standalone',
    default:       <ActionButton iconLeft="action-edit" buttonType="default" standalone label="Label" />,
    primary:       <ActionButton iconLeft="action-add-circle" buttonType="primary" standalone label="Label" />,
    destructive:   <ActionButton iconLeft="action-remove-circle" buttonType="destructive" standalone label="Label" />,
    confirmative:  <ActionButton iconLeft="action-refresh" buttonType="confirmative" standalone label="Label" />,
  },
  {
    id: 'Standalone with Base',
    default:       <ActionButton iconLeft="action-edit" buttonType="default" standalone base label="Label" />,
    primary:       <ActionButton iconLeft="action-add-circle" buttonType="primary" standalone base label="Label" />,
    destructive:   <ActionButton iconLeft="action-remove-circle" buttonType="destructive" standalone base label="Label" />,
    confirmative:  <ActionButton iconLeft="action-refresh" buttonType="confirmative" standalone base label="Label" />,
  },
  {
    id: 'Icon Right',
    default:       <ActionButton iconRight="action-edit" buttonType="default" label="Label" />,
    primary:       <ActionButton iconRight="action-add-circle" buttonType="primary" label="Label" />,
    destructive:   <ActionButton iconRight="action-remove-circle" buttonType="destructive" label="Label" />,
    confirmative:  <ActionButton iconRight="action-refresh" buttonType="confirmative" label="Label" />,
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
  <ActionButton buttonType="default" iconLeft="action-edit" label="Default" />
  <ActionButton buttonType="primary" iconLeft="action-edit" label="Primary" />
  <ActionButton buttonType="confirmative" iconLeft="action-edit" label="Confirmative" />
  <ActionButton buttonType="destructive" iconLeft="action-edit" label="Destructive" />
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
  <ActionButton iconLeft="action-add-default" label="Label" />
</FloatingList>
<FloatingList className={olt.uTextAlignRight}>
  <ActionButton iconRight="action-add-default" label="Label" />
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
  <ActionButton iconLeft="action-add-default" label="Fixed Label" fixed />
</p>
<p>
  Standalone:
  <ActionButton iconLeft="action-add-default" label="Standalone" standalone />
</p>
<p>
  Base:
  <ActionButton iconRight="action-add-default" label="Base" base />
</p>
<p>
  Standalone Base:
  <ActionButton iconRight="action-add-default" label="Standalone Base" standalone base />
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