## Description

The Navigation group element for the sidebar.

```jsx
import { MemoryRouter } from 'react-router';
import {
  SidebarNavigation,
  SidebarNavigationItem,
  SidebarSubNavigationItem,
  Sidebar,
} from '@lightelligence/react';
<Sidebar style={{ position: 'static' }}>
  <MemoryRouter>
    <SidebarNavigation>
      <SidebarNavigationItem icon="home" title="Home" to="/home" />
      <SidebarNavigationItem icon="sensor" title="Devices" to="/devices">
        <SidebarSubNavigationItem title="Devices" to="/devices/devices" />
        <SidebarSubNavigationItem title="Types" to="/devices/types" />
      </SidebarNavigationItem>
      <SidebarNavigationItem
        icon="app"
        title="Applications"
        to="/applications"
      />
      <SidebarNavigationItem icon="code" title="Code" to="/developer" />
      <SidebarNavigationItem icon="user-default" title="Team" to="/team" />
    </SidebarNavigation>
  </MemoryRouter>
</Sidebar>;
```
