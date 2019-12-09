## Description

The header element that can be rendered on top of your page.

```jsx harmony
import { Header, ActionButton, Tabs, Tab } from '@lightelligence/react';
const logo = require('../../../resources/lightelligence.svg');
<Header
  style={{ position: 'static' }} /* Used for demo purposes */
  logo={<img src={logo} />}
  left={
    <ActionButton label="Back" iconLeft="chevron-left" buttonType="default" />
  }
  right={
    <ActionButton label="Logout" buttonType="default" iconRight="locked" />
  }
>
  <Tabs value="details">
    <Tab label="Details" value="details" />
    <Tab label="Permissions" />
    <Tab label="Redirects" />
    <Tab label="Tenants" />
  </Tabs>
</Header>
```
