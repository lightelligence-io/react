## Description

Use the `Seperator` to separate different items in the sidebar.

```js
import { MemoryRouter } from 'react-router';
import {
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarSeparator,
  Sidebar,
} from '@lightelligence/react';
<Sidebar style={{ position: 'static' }}>
  <MemoryRouter>
    <SidebarNavigation>
      <SidebarNavigationItem icon="home" title="Home" to="/home" />
      <SidebarNavigationItem icon="code" title="Code" to="/developer" />
    </SidebarNavigation>
    <SidebarSeparator />
    <SidebarNavigation>
      <SidebarNavigationItem icon="sensor" title="Devices" to="/devices" />
      <SidebarNavigationItem icon="user-default" title="Team" to="/team" />
    </SidebarNavigation>
  </MemoryRouter>
</Sidebar>;
```
