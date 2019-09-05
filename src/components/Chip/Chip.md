### Description

Chip can be used with <span> elements and and occupy the olt-Chip* class names.

### Overview

- **Default**: Tags, Attributes, Filters<br />
Clickable but no Call To Action
- **Dark**: Medium Emphasis, Tags, Attributes, Filters<br />
Clickable but no Call To Action
- **Light**: Medium Emphasis, Tags, Attributes, Filters<br />
Clickable but no Call To Action
- **Primary / Active**: Medium emphasis, Active Tags, Attributes, Filters<br />
Clickable but no CTA

```js
import { DataCards, DataCardsItem, Chip, Card } from '@lightelligence/react';
const fields = [
  { key: 'id', label: '' },
  { key: 'default', label: 'Default'},
  { key: 'dark', label: 'Dark' },
  { key: 'light', label: 'Light' },
  { key: 'primary_active', label: 'Primary / Active' },
];

const wrap = (chip, dark) => dark ? (<Card color={dark ? 'dark' : undefined}>
  <div style={{ textAlign: 'center' }}>{chip}</div>
  </Card>)  : <div style={{ textAlign: 'center' }}>{chip}</div>;
const rows = [
  {
    id: 'Default',
    default:    wrap(<Chip color="default">Chip</Chip>),
    dark:      wrap(<Chip color="dark">Chip</Chip>),
    light:        wrap(<Chip color="light">Chip</Chip>, true),
    primary_active: wrap(<Chip color="primary">Chip</Chip>),
  },
  {
    id: 'Decoration Left',
    default:    wrap(<Chip iconLeft="add" color="default">Chip</Chip>),
    dark:      wrap(<Chip iconLeft="add" color="dark">Chip</Chip>),
    light:        wrap(<Chip iconLeft="add" color="light">Chip</Chip>, true),
    primary_active: wrap(<Chip iconLeft="add" color="primary">Chip</Chip>),
  },
  {
    id: 'Decoration Right',
    default:    wrap(<Chip iconRight="add" color="default">Chip</Chip>),
    dark:      wrap(<Chip iconRight="add" color="dark">Chip</Chip>),
    light:        wrap(<Chip iconRight="add" color="light">Chip</Chip>, true),
    primary_active: wrap(<Chip iconRight="add" color="primary">Chip</Chip>),
  },
  {
    id: 'Count',
    default:    wrap(<Chip color="default" bubble={5}>Chip</Chip>),
    dark:      wrap(<Chip color="dark" bubble={5}>Chip</Chip>),
    light:        wrap(<Chip color="light" bubble={5}>Chip</Chip>, true),
    primary_active: wrap(<Chip color="primary" bubble={5}>Chip</Chip>),
  },
  {
    id: 'Count + Decoration Left',
    default:    wrap(<Chip iconLeft="add" color="default" bubble={5}>Chip</Chip>),
    dark:      wrap(<Chip iconLeft="add" color="dark" bubble={5}>Chip</Chip>),
    light:        wrap(<Chip iconLeft="add" color="light" bubble={5}>Chip</Chip>, true),
    primary_active: wrap(<Chip iconLeft="add" color="primary" bubble={5}>Chip</Chip>),
  },
  {
    id: 'Shortened',
    default:    wrap(<Chip color="default">Lore...sum</Chip>),
    dark:      wrap(<Chip color="dark">Lore...sum</Chip>),
    light:        wrap(<Chip color="light">Lore...sum</Chip>, true),
    primary_active: wrap(<Chip color="primary">Lore...sum</Chip>),
  },
  {
    id: 'Selectable',
    default:    wrap(<Chip selectable onClick={() => alert('click')} color="default">Chip</Chip>),
    dark:      wrap(<Chip selectable onClick={() => alert('click')} color="dark">Chip</Chip>),
    light:        wrap(<Chip selectable onClick={() => alert('click')} color="light">Chip</Chip>, true),
    primary_active: wrap(<Chip selectable onClick={() => alert('click')} color="primary">Chip</Chip>),
  },
  {
    id: 'Disabled',
    default:    wrap(<Chip disabled color="default">Chip</Chip>),
    dark:      wrap(<Chip disabled color="dark">Chip</Chip>),
    light:        wrap(<Chip disabled color="light">Chip</Chip>, true),
    primary_active: wrap(<Chip disabled color="primary">Chip</Chip>),
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
  <DataCardsItem halfSize align="center" field="dark" />
  <DataCardsItem halfSize align="center" field="light" />
  <DataCardsItem halfSize align="center" field="primary_active" />
</DataCards>;
```

- **Error**: Negative Emphasis, No destructive CTA<br />
Not Clickable
- **Success**: Positive Emphasis, No confirmative CTA<br />
Not Clickable
- **Info**: Neutral Emphasis, Important Notes & Announcements<br />
Not Clickable



```js
import { DataCards, DataCardsItem, Chip, Card } from '@lightelligence/react';
const fields = [
  { key: 'id', label: '' },
  { key: 'error', label: 'Error'},
  { key: 'success', label: 'Success' },
  { key: 'info', label: 'Info' },
];

const wrap = (chip) => (<div style={{ textAlign: 'center' }}>{chip}</div>);
const rows = [
  
  {
    id: 'Default',
    error:    wrap(<Chip color="error">Chip</Chip>),
    success:      wrap(<Chip color="success">Chip</Chip>),
    info:        wrap(<Chip color="info">Chip</Chip>),
  },
  {
    id: 'Decoration Left',
    error:    wrap(<Chip iconLeft="add" color="error">Chip</Chip>),
    success:      wrap(<Chip iconLeft="add" color="success">Chip</Chip>),
    info:        wrap(<Chip iconLeft="add" color="info">Chip</Chip>),
  },
  {
    id: 'Count',
    error:    wrap(<Chip color="error" bubble={5}>Chip</Chip>),
    success:      wrap(<Chip color="success" bubble={5}>Chip</Chip>),
    info:        wrap(<Chip color="info" bubble={5}>Chip</Chip>),
  },
  {
    id: 'Count + Decoration Left',
    error:    wrap(<Chip iconLeft="add" color="error" bubble={5}>Chip</Chip>),
    success:      wrap(<Chip iconLeft="add" color="success" bubble={5}>Chip</Chip>),
    info:        wrap(<Chip iconLeft="add" color="info" bubble={5}>Chip</Chip>),
  },
  {
    id: 'Shortened',
    error:    wrap(<Chip color="error">Lore...sum</Chip>),
    success:      wrap(<Chip color="success">Lore...sum</Chip>),
    info:        wrap(<Chip color="info">Lore...sum</Chip>),
  }
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
  <DataCardsItem halfSize align="center" field="error" />
  <DataCardsItem halfSize align="center" field="success" />
  <DataCardsItem halfSize align="center" field="info" />
</DataCards>;
```

### Colors

```js
import { Chip, Card, FloatingList } from '@lightelligence/react';
<>
<Card>
<FloatingList>
  <Chip>Default</Chip>
  <Chip color="primary">Primary</Chip>
  <Chip color="active">Active</Chip>
  <Chip color="dark">Dark</Chip>
  <Chip color="info">Info</Chip>
  <Chip color="error">Error</Chip>
  <Chip color="success">Success</Chip>
</FloatingList>
</Card>
<Card color="dark">
  <Chip disabled color="light">Light</Chip>
</Card>
</>
```
### Variations

#### Disabled

Chips which do not have the color `error`, `success` or `info` can have the `disabled` property set which will make them disabled.

```js
import { Chip, FloatingList, Card } from '@lightelligence/react';
<>
<Card>
<FloatingList>
  <Chip disabled>Default</Chip>
  <Chip disabled color="primary">Primary</Chip>
  <Chip disabled color="active">Active</Chip>
  <Chip disabled color="dark">Dark</Chip>
</FloatingList>
</Card>
<Card color="dark">
  <Chip disabled color="light">Light</Chip>
</Card>
</>
```

#### Selectable and onClick

Chips that are `selectable` can have an `onClick` property.

```js
import { Chip, Icon, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Chip onClick={() => alert('Chip closed!')} selectable>
    Primary
  </Chip>
</FloatingList>;
```

### Decorations

#### Icons

Each Chip can have an icon rendered on the left or on the right side by adding `iconLeft` or `iconRight` properties to the component.

```js
import { Chip, Icon, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Chip onClick={() => alert('Chip closed!')} color="primary" selectable iconLeft="add">
    Primary
  </Chip>
  <Chip onClick={() => alert('Chip closed!')} selectable iconRight="add">
    Primary
  </Chip>
</FloatingList>;
```


#### Bubble

Each Chip can have an additional bubble rendered on the top right side by setting the `bubble` property.

```js
import { Chip, Icon, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Chip bubble={1}>
    Default
  </Chip>
  <Chip bubble={42} color="primary" >
    Primary
  </Chip>
  <Chip bubble={5} color="dark" >
    Dark
  </Chip>
  <Chip bubble={11} color="error" >
    Error
  </Chip>
  <Chip bubble={23} color="success" >
    Success
  </Chip>
  <Chip bubble={3} color="info" >
    Info
  </Chip>
</FloatingList>;
```

The Chip's bubble can also be an icon by setting the `bubbleIcon` property.

```js
import { Chip, Icon, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Chip bubbleIcon="add">
    Default
  </Chip>
  <Chip color="primary" bubbleIcon="add">
    Primary
  </Chip>
  <Chip color="dark" bubbleIcon="add">
    Dark
  </Chip>
  <Chip color="error" bubbleIcon="add">
    Error
  </Chip>
  <Chip color="success" bubbleIcon="add">
    Success
  </Chip>
  <Chip color="info" bubbleIcon="add">
    Info
  </Chip>
</FloatingList>;
```

Bubble's colors can also be fixed by setting the `bubbleColor` property to `info`, `success`, `warning` or `error`. They only work with the default Chip.

```js
import { Chip, Icon, FloatingList } from '@lightelligence/react';
<FloatingList>
  <Chip bubbleColor="info" bubbleIcon="add">
    Info with icon
  </Chip>
  <Chip bubbleColor="success" bubble={42}>
    Success with Counter
  </Chip>
  <Chip bubbleColor="warning" bubbleIcon="add">
    Warning with icon
  </Chip>
  <Chip bubbleColor="error" bubbleIcon="add">
    Error with icon
  </Chip>
</FloatingList>;
```