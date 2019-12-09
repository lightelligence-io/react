## Description

You can use the tooltip component to show a tooltip for a component (like a button) or on any text.

Use the tooltip to render information when the user hovers over an element with the mouse.

Use this scarcely as the user experience is less good on touch devices that don't support hovering.

## Sizes

```js
import { Tooltip, Button, Card } from '@lightelligence/react';
<>
  {'You can add '}
  <Tooltip message="Tooltip">
    <span class="olt-u-colorPrimary">Tooltips</span>
  </Tooltip>
  {' or even '}
  <Tooltip
    wide
    message="Lorem Ipsum Dolor sit amet consteur il amet dos el"
  >
    <span class="olt-u-colorPrimary">Wide Tooltips</span>
  </Tooltip>
  {' to your text or components.'}
</>;
```

## Positions

```js
import { Tooltip, Button, Card } from '@lightelligence/react';
<>
  <Tooltip message="Tooltip">
    <span class="olt-u-colorPrimary">Tooltip Top</span>
  </Tooltip>
 {' | '}
  <Tooltip bottom message="Tooltip">
    <span class="olt-u-colorPrimary">Tooltip Bottom </span>
  </Tooltip>
</>;
```

## Colors

```js
import { Tooltip, Button } from '@lightelligence/react';
<>
  <Tooltip color="primary" message="Tooltip">
    <span class="olt-u-colorPrimary">Primary</span>
  </Tooltip>
 {' | '}
  <Tooltip color="secondary" message="Tooltip">
    <span class="olt-u-colorSecondary">Secondary</span>
  </Tooltip>
 {' | '}
  <Tooltip color="info" message="Tooltip">
    <span class="olt-u-colorInfo">Info</span>
  </Tooltip>
 {' | '}
  <Tooltip color="error" message="Tooltip">
    <span class="olt-u-colorError">Error</span>
  </Tooltip>
 {' | '}
  <Tooltip color="success" message="Tooltip">
    <span class="olt-u-colorSuccess">Success</span>
  </Tooltip>
 {' | '}
  <Tooltip color="gray500" message="Tooltip">
    <span class="olt-u-colorGray500">Gray500</span>
  </Tooltip>
</>;
```

## Other trigger components

```js
import { Tooltip, Button, Card } from '@lightelligence/react';
<>
  <Tooltip wide message="This is a long tooltip on a card.">
    <Card>Cards! Cards! Cards!</Card>
  </Tooltip>
  {' '}
  <Tooltip message="...or on a button.">
    <Button onClick={()=>alert('Thanks!')}>Push Me</Button>
  </Tooltip>
</>
```
