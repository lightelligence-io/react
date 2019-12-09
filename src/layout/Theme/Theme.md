## Description

_Theme_ gives you the opportunity to use white-labeling in your application,
by changing the `primaryColor` and the `sidebarColor` of the components.

The white-labeling works only under the wrapped components inside the _Theme_
component, so a good place for that component would be in the root of your
application.

```js
import { Theme, Chip, Button, Toggle } from '@lightelligence/react';
<div>
  {/** Try changing the value here */}
  <Theme primaryColor="#bf0cff" sidebarColor="#bf0cff">
    <Chip color="primary" selectable onClick="() => {}">
      Chip
    </Chip>
    <br />
    <br />
    <Button buttonType="default">Button</Button>
    <br />
    <br />
    <Toggle checked />
  </Theme>
  <br />
  <Theme>
    <Chip color="primary" selectable onClick="() => {}">
      Chip
    </Chip>
    <br />
    <br />
    <Button buttonType="default">Button</Button>
    <br />
    <br />
    <Toggle checked />
  </Theme>
</div>;
```
